import React, { Fragment, PureComponent } from 'react'

import SEO from '../components/seo'
import SongEntry from '../components/songentry'

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
        <p>
          I make and perform electronic funk music as{' '}
          <strong>Benthere Donethat</strong>. You can find me on social media
          and music distribution platforms{' '}
          <a href="https://bentheredoneth.at">here</a>!
        </p>
        <p>
          Below are some tracks from the latest game I composed for,{' '}
          <i>Fashion FUPA</i>, created by{' '}
          <a href="https://fufroom.art/">Fufroom</a>. You can download the
          soundtrack from{' '}
          <a href="https://benwiley4000.bandcamp.com/album/fashion-fupa-official-game-soundtrack">
            Bandcamp
          </a>{' '}
          and you can get <i>Fashion FUPA</i> on{' '}
          <a href="https://store.steampowered.com/app/4492290/Fashion_FUPA/">
            Steam
          </a>
          !
        </p>
        <img src="/album_artwork/fashion_fupa.png" width={300} />
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
      </Fragment>
    )
  }
}

export default playerContextFilter(Music, ['playlist', 'activeTrackIndex'])
