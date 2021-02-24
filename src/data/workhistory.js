import React, { Fragment } from 'react'

export default [
  {
    employer: 'Element AI',
    title: 'AI Software Developer',
    location: 'Montréal, Québec, Canada',
    startDate: 'February 2020',
    endDate: null,
    contract: false,
    bulletPoints: [
      'Developing UI architecture, components and applications for a machine learning software platform',
      'Working closely with backend API developers, designers, product owners and clients (internal and external) to introduce new features to the platform',
      'Implementing key performance optimizations in highly data-intensive applications',
      'Developing tooling used by other developers to build new applications on the platform'
    ],
  },
  {
    employer: 'Autodesk',
    title: 'Software Developer',
    location: 'Montréal, Québec, Canada',
    startDate: 'January 2017',
    endDate: 'January 2020',
    contract: false,
    bulletPoints: [
      <Fragment>
        Developing Shotgun, an Emmy-winning web app that helps streamline
        production and review for studios creating films, shows and games like{' '}
        <i>Star Wars</i>, <i>Game of Thrones</i> and <i>FIFA</i>
      </Fragment>,
      'Role focused on in-app visualization of data belonging to Shotgun clients',
      'Frequent context-switching between large legacy code base and newer stack including React and GraphQL',
      'Helping lead way on migrating portions of legacy app to newer stack'
    ],
  },
  {
    employer: 'MobileMedTek',
    title: 'Front-End Developer',
    location: 'Louisville, Kentucky, USA',
    startDate: 'April 2016',
    endDate: 'December 2016',
    contract: true,
    bulletPoints: [
      'Architected and built performant, secure web app, displaying on-demand and real-time medical data',
      'React, Redux, Node.js server rendering, other state-of-the-art JavaScript tools',
      "Worked closely with back-end developer to ensure smooth communication with MobileMedTek's streaming API",
    ],
  },
  {
    employer: 'Collabra',
    title: 'Software Engineer',
    location: 'Louisville, Kentucky, USA',
    startDate: 'August 2015',
    endDate: 'March 2016',
    contract: true,
    bulletPoints: [
      'Collaborated with small, agile team using Node.js, React, Flux and MySQL, sharing full stack responsibilities',
      "Designed, implemented site-wide achievements system based on users' video/audio recording data",
      "Contributed regularly to popular open-source software projects on company's behalf",
    ],
  },
  {
    employer: 'Fossil Fuel Divestment Student Network',
    title: 'Lead Web Developer',
    location: null,
    startDate: '2014',
    endDate: '2016',
    contract: false,
    bulletPoints: [
      'Developed/maintained NationBuilder website for respected national student organization',
      'Crafted solutions for campaigner initiatives including crucial multi-thousand-dollar fundraising drives',
      'Trained other network staff and volunteers to use and understand online tools',
    ],
  },
]
