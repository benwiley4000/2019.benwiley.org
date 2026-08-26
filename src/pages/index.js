import React, { Fragment } from 'react'

import ProfileImage from '../components/profileimage'
import SEO from '../components/seo'
import { Link } from 'gatsby'

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
        'Blog',
      ]}
    />
    <h1>About Me</h1>
    <ProfileImage right filename="ben_photo_2026.jpeg" />
    <p style={{ fontSize: '1.2em' }}>
      I'm a programmer and musician based in Montréal, Québec.
    </p>
    <p>
      As a <Link to="/open-source">programmer</Link>, I specialize in user
      interfaces, rendering performance, and audio, among other areas.
    </p>
    <p>
      As a <Link to="/music">musician</Link>, I create electronic funk music and
      perform around Montréal as{' '}
      <a href="https://bentheredoneth.at">Benthere Donethat</a>. I've also made
      soundtracks for several <Link to="/games">indie video games</Link>.
    </p>
    <p>
      My current day job is at{' '}
      <a href="https://prevu3d.com/" rel="noreferrer" target="_blank">
        Prevu3D
      </a>
      . My <Link to="/work-history">previous employers</Link> have included
      Autodesk, Element AI (a.k.a. ServiceNow Research), and Ubisoft.
    </p>
    <p>I'm a native English speaker, and I speak French fluently.</p>
    <p>
      In 2015 I received a Bachelor of Arts (B.A.) in Sociology and a Minor in
      Computer Science from Davidson College in Davidson, North Carolina, USA.
    </p>
  </Fragment>
)

export default IndexPage
