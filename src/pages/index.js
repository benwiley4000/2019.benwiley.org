import React, { Fragment } from 'react'

import ProfileImage from '../components/profileimage'
import SEO from '../components/seo'

const IndexPage = props => (
  <Fragment>
    <SEO
      title="About Me"
      keywords={[
        'Ben Wiley',
        'Cassette',
        'JavaScript',
        'Open Source',
        'Games',
        'Web',
        'Music',
        'Writing',
      ]}
    />
    <h1>About Me</h1>
    <ProfileImage
      right
      filename="cassette_presentation.jpg"
      caption="Presenting my media player library, Cassette, at the JavaScript Montréal Meetup (Dec 2018)"
    />
    <p style={{ fontSize: '1.2em' }}>I'm a programmer, musician and speaker.</p>
    <p>
      When I'm not working on open source software, making music or developing indie video
      games, I'm probably at my day job at Element AI. There I help build a platform that
      helps artificial intelligence researchers run experiments and build products around
      cutting-edge machine learning techniques.
    </p>
    <p>
      Sometimes I give presentations on topics related to programming at meetups
      and conferences. In the past I've also led workshops on jazz improvisation
      and student organizing. I'm a native English speaker, and these days, my
      French isn't too bad either.
    </p>
    <p>
      In 2015 I received a Bachelor of Arts (B.A.) in Sociology and a Minor in
      Computer Science from Davidson College in Davidson, North Carolina, USA.
    </p>
    <ProfileImage filename="ben_new_2.jpg" />
  </Fragment>
)

export default IndexPage
