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
      When I'm not working on open source software, making music, developing
      indie video games, enjoying the very short summers in Montréal, or
      sleeping, then I'm probably at my day job, currently with ExPretio
      Technologies. I specialize in user interfaces, rendering performance and
      audio, among other areas.
    </p>
    <p>
      Sometimes I give presentations on topics related to programming at meetups
      and conferences. In the past I've also taught workshops on jazz
      improvisation and student organizing. I'm a native English speaker, and I
      speak French fluently.
    </p>
    <p>
      In 2015 I received a Bachelor of Arts (B.A.) in Sociology and a Minor in
      Computer Science from Davidson College in Davidson, North Carolina, USA.
    </p>
    <ProfileImage filename="ben_new_2.jpg" />
  </Fragment>
)

export default IndexPage
