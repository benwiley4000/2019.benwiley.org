import React, { Fragment } from 'react'

import SEO from '../components/seo'

import WritingCategory from '../components/writingcategory'
import writing from '../data/writing'

const Writing = props => (
  <Fragment>
    <SEO
      title="Blog"
      keywords={[
        'Ben Wiley',
        'Writing',
        'Sociology',
        'Computer Science',
        'Artificial Intelligence',
      ]}
    />
    <h1>Blog</h1>
    <p>
      I have a <a href="http://blog.benwiley.org/">blog</a> focused on
      programming topics. It gets updated once every few years!
    </p>
  </Fragment>
)

export default Writing
