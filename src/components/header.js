import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { PlayerContextConsumer } from '@cassette/core'
import { MediaPlayerControls, MediaProgressDisplay } from '@cassette/player'

import { maxWidth } from './constants'

const playerContextFilterList = ['paused', 'activeTrackIndex']

// thanks to https://stackoverflow.com/a/21627295
function visibleY(el) {
  var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height,
    el = el.parentNode
  // Check if bottom of the element is off the page
  if (rect.bottom < 0) return false
  // Check its within the document viewport
  if (top > document.documentElement.clientHeight) return false
  do {
    rect = el.getBoundingClientRect()
    if (top <= rect.bottom === false) return false
    // Check if the element is out of view due to a container scrolling
    if ((top + height) <= rect.top) return false
    el = el.parentNode
  } while (el != document.body)
  return true
}

function onMusic(props) {
  return props.currentPathname.indexOf('/music') !== -1
}

class MusicBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hideMusicBarWhilePlaying: onMusic(props)
    }
    this.checkIfTrackVisible = this.checkIfTrackVisible.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkIfTrackVisible)
    window.addEventListener('scroll', this.checkIfTrackVisible)
  }

  componentDidUpdate(prevProps) {
    const currentlyOnMusic = onMusic(this.props)
    const previouslyOnMusic = onMusic(prevProps)
    if (currentlyOnMusic !== previouslyOnMusic) {
      this.checkIfTrackVisible()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkIfTrackVisible)
    window.removeEventListener('scroll', this.checkIfTrackVisible)
  }

  findCurrentTrackEntryElement() {
    const n = this.props.activeTrackIndex + 1
    return document.querySelector(`.song_entry:nth-child(${n})`)
  }

  checkIfTrackVisible() {
    if (onMusic(this.props)) {
      this.setState({
        hideMusicBarWhilePlaying: visibleY(this.findCurrentTrackEntryElement())
      })
    } else {
      this.setState({
        hideMusicBarWhilePlaying: false
      })
    }
  }

  render() {
    const hidden = this.props.paused || this.state.hideMusicBarWhilePlaying
    return (
      <div
        className={'media_progress_wrapper' + (hidden ? ' hidden' : '')}
        onClick={() => {
          if (onMusic(this.props)) {
            this.findCurrentTrackEntryElement().scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            })
          } else {
            navigate('/music', { state: { scrollToActiveTrack: true } })
          }
        }}
      >
        <MediaProgressDisplay />
      </div>
    )
  }
}

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
      <PlayerContextConsumer filterList={playerContextFilterList}>
        {({ paused, activeTrackIndex }) =>
          <MusicBar
            currentPathname={currentPathname}
            paused={paused}
            activeTrackIndex={activeTrackIndex}
          />}
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
