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
    <p style={{ fontSize: '1.2em' }}>
      I'm a programmer and musician based in Montréal, Québec.
    </p>
    <p>
      As a programmer, I specialize in user interfaces, rendering performance,
      and audio, among other areas.
    </p>
    <p>
      As a musician, I've created soundtracks for video games, web ads and TV.
    </p>
    <p>
      I also create electronic funk music and perform around Montréal as{' '}
      <a
        href="https://www.instagram.com/benthere.donethat.mtl/"
        target="_blank"
        rel="noreferrer"
      >
        Benthere Donethat
      </a>
      .
    </p>
    <p>
      My day job is at{' '}
      <a href="https://3dverse.com/" rel="noreferrer" target="_blank">
        3dverse
      </a>
      , where I work on their cloud-based realtime 3d platform.
    </p>
    <p>
      My previous employers have included Autodesk, Element AI (a.k.a.
      ServiceNow Research), and Ubisoft.
    </p>
    <p>I'm a native English speaker, and I speak French fluently.</p>
    <p>
      In 2015 I received a Bachelor of Arts (B.A.) in Sociology and a Minor in
      Computer Science from Davidson College in Davidson, North Carolina, USA.
    </p>
    <ProfileImage filename="ben_new_2.jpg" />
  </Fragment>
)

export default IndexPage
