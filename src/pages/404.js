import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>If you think I broke something, you can <Link to="/contact">message me</Link> to let me know.</p>
  </Layout>
)

export default NotFoundPage
