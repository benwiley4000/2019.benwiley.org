import { withPrefix } from 'gatsby'

import React, { Fragment } from 'react'

export default [
  {
    categoryTitle: 'Computer Science',
    entries: [
      {
        title: 'Implementing an Ant Swarm Intelligence-Based Approach to Balancing Communication Network Loads',
        date: '6 May 2015',
        link: withPrefix('/doc/ant-intelligence.pdf'),
        description: 'Investigating a decentralized network traffic routing algorithm based on real-world behavior of ant colonies (with Tommy Rhodes).',
        isLinkExternal: false
      }
    ]
  },
  {
    categoryTitle: 'Sociology',
    entries: [
      {
        title: (
          <Fragment>
            Narrative Identity as Means for Understanding and
            Criticizing <i>The Two-Income Trap</i>
          </Fragment>
        ),
        date: '11 May 2015',
        link: withPrefix('/doc/narrative-identity-warren.pdf'),
        description: 'Critical analysis of Senator Elizabeth Warren and daughter Amelia Tyagi\'s acclaimed 2003 book. Analysis focuses on the underdiscussed role of race in middle-class families\' flight to public schools in suburban neighborhoods.',
        isLinkExternal: false
      },
      {
        title: 'Is Social Movement Organizing Easier in the Age of Social Media?',
        date: '15 Apr 2015',
        link: withPrefix('/doc/movement-organizing-social-media.pdf'),
        description: 'Discussion of new assets and difficulties movements face in the age of social media, using examples of the Zapatistas, Anonymous, the Arab Spring, Occupy, and Kony 2012.',
        isLinkExternal: false
      }
    ]
  },
  {
    categoryTitle: 'Journalism',
    entries: [
      {
        title: 'Indigenous Groups in Papua New Guinea Ready for War with ExxonMobil',
        date: '14 May 2014',
        link: 'http://benwiley4000.kinja.com/indigenous-groups-in-papua-new-guinea-ready-for-war-wit-1576026036',
        description: 'Second-hand compilation of investigative reports into the oil giant\'s controversial Liquefied Natural Gas project.',
        isLinkExternal: true
      }
    ]
  }
]
