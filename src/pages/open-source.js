import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Link } from 'gatsby'

const OpenSource = props => (
  <Layout>
    <SEO
      title="OpenSource | Ben Wiley"
      keywords={['Ben Wiley', 'Cassette', 'JavaScript', 'Open Source', 'Games', 'Web', 'React', 'Lua', 'Python']}
    />
    <h1>Open Source</h1>
    <p>TODO</p>
    <p>See also: <Link to="/games">Games</Link> (all the games I've worked on are open source.)</p>
  </Layout>
)

export default OpenSource
