/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React, { Component } from 'react'
import { PlayerContextProvider } from '@cassette/core';

import playlist from './src/playlist';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.handleStateSnapshot = this.handleStateSnapshot.bind(this);
    this.initialStateSnapshot = JSON.parse(
      localStorage.getItem('media_player_snapshot')
    )
  }

  handleStateSnapshot(snapshot) {
    localStorage.setItem('media_player_snapshot', JSON.stringify(snapshot));
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

export const wrapPageElement = ({ element }) => <Wrapper>{element}</Wrapper>
