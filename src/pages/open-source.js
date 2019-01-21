import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

import ProfileImage from '../components/profileimage'
import OpenSourceCategory from '../components/opensourcecategory'
import opensource from '../data/opensource'

const OpenSource = props => (
  <Fragment>
    <SEO
      title="OpenSource | Ben Wiley"
      keywords={[
        'Ben Wiley',
        'Cassette',
        'JavaScript',
        'Open Source',
        'Games',
        'Web',
        'React',
        'Lua',
        'Python',
        'C++',
        'Java'
      ]}
    />
    <h1>Open Source</h1>
    <ProfileImage
      filename="cassette_presentation.jpg"
      caption="Presenting my media player library, Cassette, at the JavaScript Montréal Meetup (Dec 2018)"
    />
    <p>
      Below is a selection of open source software projects I have authored.
      Additionally, all the <Link to="/games">games</Link> I've worked on are
      open source.
    </p>
    {opensource.map(category => (
      <OpenSourceCategory key={category.categoryTitle} {...category} />
    ))}
  </Fragment>
)

export default OpenSource
