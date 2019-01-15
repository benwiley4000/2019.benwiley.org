/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React, { Component } from 'react'
import { PlayerContextProvider } from '@cassette/core'

import playlist from './src/data/playlist'
import Layout from './src/components/layout'

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
