import React, { Fragment } from 'react'

import ProfileImage from '../components/profileimage'
import SEO from '../components/seo'

const IndexPage = props => (
  <Fragment>
    <SEO
      title="About Me | Ben Wiley"
      keywords={[
        'Ben Wiley',
        'Cassette',
        'JavaScript',
        'Open Source',
        'Games',
        'Web',
        'Music',
        'Writing',
      ]}
    />
    <h1>About Me</h1>
    <p>
      I grew up in Louisville, Kentucky, USA, and attended Davidson College in
      Davidson, North Carolina between 2011 and 2015. I received a Bachelor of
      Arts (B.A.) in Sociology and a Minor in Computer Science. I now live in
      Montréal, Québec, Canada, since 2017.
    </p>
    <p>
      Since 2015 I have worked professionally developing web software.
      In my free time I enjoy listening to (and sometimes writing) music, as
      well as slowly improving my French (which one tends to do in Montréal).
    </p>
    <p>I speak English natively, and French competently.</p>
    <ProfileImage
      filename="tunisia_desert.jpg"
      caption="On a class trip in the south of Tunisia, where I studied for one semester (Feb 2014)"
    />
  </Fragment>
)

export default IndexPage
