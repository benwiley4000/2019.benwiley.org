import React, { Fragment } from 'react'

import SEO from '../components/seo'

import SpeakingEntry from '../components/speakingentry'
import speaking from '../data/speaking'

const Speaking = props => (
  <Fragment>
    <SEO
      title="Speaking"
      keywords={[
        'Ben Wiley',
        'JavaScript',
        'Web',
        'React',
        'Cassette',
        'JavaScript',
        'Open Source',
      ]}
    />
    <h1>Speaking</h1>
    {speaking.map(talk => (
      <SpeakingEntry
        {...talk}
        key={talk.title}
        location={props.location}
      />
    ))}
  </Fragment>
)

export default Speaking
