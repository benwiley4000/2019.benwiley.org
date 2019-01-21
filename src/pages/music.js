import React, { Fragment } from 'react'

import SEO from '../components/seo'
import SongEntry from '../components/songentry'
import ProfileImage from '../components/profileimage'

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
    <ProfileImage
      filename="game_jam.jpg"
      caption="Composing the soundtrack for the game Sk8Border at the Montréal Anti-Fascist Game Jam (Apr 2018)"
    />
  </Fragment>
)

export default playerContextFilter(Music, ['playlist', 'activeTrackIndex'])
