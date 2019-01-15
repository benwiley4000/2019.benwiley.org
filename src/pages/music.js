import React, { Fragment } from 'react'

import SEO from '../components/seo'
import SongEntry from '../components/songentry'

import { playerContextFilter } from '@cassette/core'

const Music = ({ playlist, activeTrackIndex }) => (
  <Fragment>
    <SEO
      title="Music | Ben Wiley"
      keywords={['Ben Wiley', 'Music', 'Soundtrack', 'Games', 'Themes']}
    />
    <h1>Music</h1>
    {playlist.map((track, i) => (
      <SongEntry
        key={track.url}
        track={track}
        trackIndex={i}
        active={activeTrackIndex === i}
      />
    ))}
  </Fragment>
)

export default playerContextFilter(Music, ['playlist', 'activeTrackIndex'])
