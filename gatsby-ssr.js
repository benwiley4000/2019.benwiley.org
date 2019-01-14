/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React, { Component } from 'react'
import { PlayerContextProvider } from '@cassette/core';

import playlist from './src/playlist';

class Wrapper extends Component {
  render() {
    return (
      <PlayerContextProvider playlist={playlist}>
        {this.props.children}
      </PlayerContextProvider>
    )
  }
}

export const wrapRootElement = ({ element }) => <Wrapper>{element}</Wrapper>
