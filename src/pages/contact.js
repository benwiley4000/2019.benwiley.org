import React, { Fragment } from 'react'

import SEO from '../components/seo'

const Contact = props => (
  <Fragment>
    <SEO
      title="Contact | Ben Wiley"
      keywords={['Ben Wiley', 'Contact', 'Email', 'GitHub', 'Twitter']}
    />
    <h1>Contact</h1>
    <p><a href="mailto:therealbenwiley@gmail.com">therealbenwiley@gmail.com</a></p>
    <p><a href="https://github.com/benwiley4000">github.com/benwiley4000</a></p>
    <p><a href="https://twitter.com/benwiley4000">@benwiley4000</a></p>
  </Fragment>
)

export default Contact
