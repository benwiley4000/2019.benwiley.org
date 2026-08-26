import React, { Fragment } from 'react'

import SEO from '../components/seo'

import VideoEntry from '../components/videoentry'
import videos from '../data/videos'

const Videos = props => (
  <Fragment>
    <SEO
      title="Videos"
      keywords={[
        'Ben Wiley',
        'JavaScript',
        'Web',
        'React',
        'Cassette',
        'JavaScript',
        'Open Source',
        'Music',
        'MIDI',
      ]}
    />
    <h1>Videos</h1>
    <p>
      <i>
        Were you looking for my{' '}
        <a href="https://www.instagram.com/benthere.donethat.mtl">
          music videos
        </a>
        ?
      </i>
    </p>
    <p>Below, I am filmed while discussing topics that interest me.</p>

    {videos.map(talk => (
      <VideoEntry {...talk} key={talk.title} location={props.location} />
    ))}
  </Fragment>
)

export default Videos
