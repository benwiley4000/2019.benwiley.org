import React, { Fragment } from 'react'

import SEO from '../components/seo'

import { Link } from 'gatsby'

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
      ]}
    />
    <h1>Open Source</h1>
    <p>TODO</p>
    <p>
      See also: <Link to="/games">Games</Link> (all the games I've worked on are
      open source.)
    </p>
  </Fragment>
)

export default OpenSource
