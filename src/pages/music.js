import React, { Fragment, PureComponent } from 'react'

import SEO from '../components/seo'
import SongEntry from '../components/songentry'
import ProfileImage from '../components/profileimage'

import { playerContextFilter } from '@cassette/core'

class Music extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false,
    }
    this.activeEntryRef = elem => {
      this.initialActiveDiv = elem
    }
  }

  componentDidMount() {
    const { state } = this.props.location
    const div = state && state.scrollToActiveTrack && this.initialActiveDiv
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (div) {
          div.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
        this.setState({
          mounted: true,
        })
      })
    })
  }

  render() {
    const { playlist, activeTrackIndex } = this.props
    return (
      <Fragment>
        <SEO
          title="Music"
          keywords={['Ben Wiley', 'Music', 'Soundtrack', 'Games', 'Themes']}
        />
        <h1>Music</h1>
        <div className="song_entries">
          {playlist.map((track, i) => (
            <SongEntry
              entryRef={i === activeTrackIndex ? this.activeEntryRef : null}
              key={track.url}
              track={track}
              trackIndex={i}
              active={this.state.mounted && activeTrackIndex === i}
            />
          ))}
        </div>
        <ProfileImage
          filename="game_jam.jpg"
          caption="Composing the soundtrack for the game Sk8Border at the Montréal Anti-Fascist Game Jam (Apr 2018)"
        />
      </Fragment>
    )
  }
}

export default playerContextFilter(Music, ['playlist', 'activeTrackIndex'])
