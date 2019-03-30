/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React, { Component } from 'react'
import { PlayerContextProvider } from '@cassette/core'
import fairAnalytics from 'fair-analytics-client-api'

import playlist from './src/data/playlist'
import Layout from './src/components/layout'

// TODO: fix this once the offline plugin works correctly?
import ReactDOM from 'react-dom'
ReactDOM.hydrate = ReactDOM.render

// when this is deployed to the same github pages domain as
// the cassette docs we don't want them to try to use each
// other's localStorage data
const localStorageKey = 'media_player_snapshot__skfljadlf';

class Wrapper extends Component {
  constructor(props) {
    super(props)
    this.handleStateSnapshot = this.handleStateSnapshot.bind(this)
    this.initialStateSnapshot = JSON.parse(
      localStorage.getItem(localStorageKey)
    )
  }

  handleStateSnapshot(snapshot) {
    localStorage.setItem(localStorageKey, JSON.stringify(snapshot))
  }

  render() {
    return (
      <PlayerContextProvider
        initialStateSnapshot={this.initialStateSnapshot}
        onStateSnapshot={this.handleStateSnapshot}
        playlist={playlist}
      >
        {this.props.children}
      </PlayerContextProvider>
    )
  }
}

export const wrapRootElement = ({ element }) => <Wrapper>{element}</Wrapper>

export const wrapPageElement = ({ element, props }) => {
  return <Layout childProps={props}>{element}</Layout>
}

// EVERYTHING BELOW CONCERNS ANALYTICS

const fa = fairAnalytics({
  url: process.env.ANALYTICS_URL
});

export const onInitialClientRender = () => {
  fa.send({
    event: 'routeLoadedFromServer',
    pathname: getPathnameForAnalytics()
  })
  setupMediaAnalytics();
}

export const onRouteUpdate = ({ location }) => {
  fa.send({
    event: 'routeRendered',
    pathname: getPathnameForAnalytics(location.pathname)
  })
}

function getPathnameForAnalytics(pathname) {
  pathname = pathname || window.location.pathname;
  if (pathname.length > 1 && pathname[pathname.length - 1] === '/') {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function setupMediaAnalytics() {
  const media = document.querySelector('video');
  let lastTimeAtSeekingStart = media.currentTime;
  let pendingSeekReport = false;
  let pendingNewTrackTimeout = true;

  media.addEventListener('emptied', () => {
    pendingNewTrackTimeout = true;
  });
  media.addEventListener('canplay', () => {
    setTimeout(() => {
      pendingNewTrackTimeout = false;
    }, 100);
  });
  media.addEventListener('timeupdate', () => {
    if (pendingSeekReport) {
      return;
    }
    lastTimeAtSeekingStart = media.currentTime;
  });
  media.addEventListener('seeking', () => {
    if (pendingNewTrackTimeout) {
      return;
    }
    pendingSeekReport = true;
  });
  media.addEventListener('play', () => {
    fa.send(getMediaAnalyticsProperties('mediaPlayed'));
  });
  media.addEventListener('pause', () => {
    fa.send(getMediaAnalyticsProperties('mediaPaused'));
  })
  let seekTimeout;
  media.addEventListener('seeked', () => {
    if (pendingNewTrackTimeout) {
      return;
    }
    const event = {
      ...getMediaAnalyticsProperties('mediaSeeked'),
      previousTime: lastTimeAtSeekingStart
    };
    clearTimeout(seekTimeout);
    seekTimeout = setTimeout(() => {
      fa.send(event);
      pendingSeekReport = false;
    }, 700);
  });
  media.addEventListener('ended', () => {
    if (pendingSeekReport) {
      return;
    }
    fa.send(getMediaAnalyticsProperties('mediaEndedNaturally'));
  });

  function getMediaAnalyticsProperties(eventName) {
    return {
      event: eventName,
      mediaSrc: media.src,
      currentTime: media.currentTime,
      pathname: getPathnameForAnalytics()
    };
  }
}

document.addEventListener('click', e => {
  let a
  for (let i = 0; i < e.path.length; i++) {
    const elem = e.path[i]
    if (elem.tagName === 'A') {
      a = elem
      break
    }
  }
  if (a) {
    fa.send({
      event: 'linkClicked',
      pathname: getPathnameForAnalytics(),
      href: a.href
    })
  }
})
