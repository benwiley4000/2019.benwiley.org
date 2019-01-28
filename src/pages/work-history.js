import React, { Fragment } from 'react'

import SEO from '../components/seo'

import WorkEntry from '../components/workentry'
import workhistory from '../data/workhistory'

const WorkHistory = props => (
  <Fragment>
    <SEO
      title="Work History | Ben Wiley"
      keywords={[
        'Ben Wiley',
        'Autodesk',
        'Shotgun',
        'JavaScript',
        'Web',
        'React',
        'Movies',
        'Games',
        'Television',
      ]}
    />
    <h1>Work History</h1>
    {workhistory.map(work => (
      <WorkEntry key={work.employer + work.title} {...work} />
    ))}
  </Fragment>
)

export default WorkHistory
