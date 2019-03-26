import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { PlayerContextConsumer } from '@cassette/core'
import { MediaPlayerControls, MediaProgressDisplay } from '@cassette/player'

import { maxWidth } from './constants'

const Header = ({ siteTitle, currentPathname }) => (
  <div
    style={{
      marginBottom: `1.45rem`,
      position: 'sticky',
      top: 0,
      zIndex: 1,
      borderBottom: '1px solid #ddd',
      background: 'white',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'inherit',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <MediaPlayerControls controls={['playpause', 'forwardskip']} />
      </div>
      <PlayerContextConsumer>
        {({ paused }) => {
          const hidden = paused || currentPathname.indexOf('/music') !== -1
          return (
            <div
              className={'media_progress_wrapper' + (hidden ? ' hidden' : '')}
              onClick={() => {
                navigate('/music', { state: { scrollToActiveTrack: true } })
              }}
            >
              <MediaProgressDisplay />
            </div>
          )
        }}
      </PlayerContextConsumer>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
