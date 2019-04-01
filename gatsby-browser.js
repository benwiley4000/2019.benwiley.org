/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React, { Component } from 'react'
import { PlayerContextProvider } from '@cassette/core'
import fairAnalytics from '@benwiley4000/fair-analytics-client-beacon-api'

import playlist from './src/data/playlist'
import Layout from './src/components/layout'

// TODO: fix this once the offline plugin works correctly?
import ReactDOM from 'react-dom'
ReactDOM.hydrate = ReactDOM.render

// when this is deployed to the same github pages domain as
// the cassette docs we don't want them to try to use each
// other's localStorage data
const localStorageKey = 'media_player_snapshot__skfljadlf'

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
  url: process.env.ANALYTICS_URL,
})

function sendAnalytics(data, guaranteeRequest = false) {
  let pathname = data.pathname || window.location.pathname
  if (pathname.length > 1 && pathname[pathname.length - 1] === '/') {
    pathname = pathname.slice(0, -1)
  }
  const { host } = window.location
  fa.send(
    {
      ...data,
      pathname,
      host,
    },
    guaranteeRequest
  )
}

export const onInitialClientRender = () => {
  sendAnalytics({ event: 'routeLoadedAsHTML' })
  setupMediaAnalytics()
}

export const onRouteUpdate = ({ location }) => {
  sendAnalytics({
    event: 'routeRendered',
    pathname: location.pathname,
  })
}

function setupMediaAnalytics() {
  const media = document.querySelector('video')
  let lastTimeAtSeekingStart = media.currentTime
  let pendingSeekReport = false
  let pendingNewTrackTimeout = true

  media.addEventListener('emptied', () => {
    pendingNewTrackTimeout = true
  })
  media.addEventListener('canplay', () => {
    setTimeout(() => {
      pendingNewTrackTimeout = false
    }, 100)
  })
  media.addEventListener('timeupdate', () => {
    if (pendingSeekReport) {
      return
    }
    lastTimeAtSeekingStart = media.currentTime
  })
  media.addEventListener('seeking', () => {
    if (pendingNewTrackTimeout) {
      return
    }
    pendingSeekReport = true
  })
  media.addEventListener('play', () => {
    sendAnalytics(getMediaAnalyticsProperties('mediaPlayed'))
  })
  media.addEventListener('pause', () => {
    sendAnalytics(getMediaAnalyticsProperties('mediaPaused'))
  })
  let seekTimeout
  media.addEventListener('seeked', () => {
    if (pendingNewTrackTimeout) {
      return
    }
    const event = {
      ...getMediaAnalyticsProperties('mediaSeeked'),
      previousTime: lastTimeAtSeekingStart,
    }
    clearTimeout(seekTimeout)
    seekTimeout = setTimeout(() => {
      sendAnalytics(event)
      pendingSeekReport = false
    }, 700)
  })
  media.addEventListener('ended', () => {
    if (pendingSeekReport) {
      return
    }
    sendAnalytics(getMediaAnalyticsProperties('mediaEndedNaturally'))
  })

  function getMediaAnalyticsProperties(eventName) {
    return {
      event: eventName,
      mediaSrc: media.src,
      currentTime: media.currentTime,
    }
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
    sendAnalytics({
      event: 'linkClicked',
      href: a.href,
    })
  }
})

window.addEventListener('beforeunload', () => {
  sendAnalytics({ event: 'unloadingPage' }, true)
});

console.log(`
This site is tracking anonymous analytics using Fair Analytics.
All collected data is stored on my own domain and is auditable. To learn more
about how you can audit this site's analytics, read the Fair Analytics Endpoints
documentation at https://github.com/vesparny/fair-analytics#endpoints.
The analytics url is: ${process.env.ANALYTICS_URL}
`)
