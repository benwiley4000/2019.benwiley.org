import React, { Fragment } from 'react'

import SEO from '../components/seo'

import WritingCategory from '../components/writingcategory'
import writing from '../data/writing'

const Writing = props => (
  <Fragment>
    <SEO
      title="Writing | Ben Wiley"
      keywords={[
        'Ben Wiley',
        'Writing',
        'Sociology',
        'Computer Science',
        'Artificial Intelligence',
      ]}
    />
    <h1>Writing</h1>
    <p>
      As well as the papers/articles below, I have a{' '}
      <a href="http://blog.benwiley.org/">blog</a> (which I rarely update).
    </p>
    {writing.map(category => (
      <WritingCategory key={category.categoryTitle} {...category} />
    ))}
  </Fragment>
)

export default Writing
