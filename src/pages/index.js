import React from 'react'

import Layout from '../components/layout'
import ProfileImage from '../components/profileimage'
import SEO from '../components/seo'

const IndexPage = props => (
  <Layout>
    <SEO
      title="About Me | Ben Wiley"
      keywords={['Ben Wiley', 'Cassette', 'JavaScript', 'Open Source', 'Games', 'Web', 'Music', 'Writing']}
    />
    <h1>About Me</h1>
    <p>I grew up in Louisville, Kentucky, USA, and attended Davidson College in Davidson, North Carolina between 2011 and 2015. I received a Bachelor of Arts (B.A.) in Sociology and a Minor in Computer Science. I now live in Montréal, Québec, Canada, since 2017.</p>
    <p>Since 2015 I have worked professionally developing software for the web. My current day job is at Autodesk where I develop UI for Shotgun, an Emmy-winning platform that helps studios collaborate on huge productions like <i>Game of Thrones</i>, <i>Star Wars</i> and <i>The Avengers</i>. Apart from my job, I maintain and contribute to a number of open source software projects related to topics like audio, graphics and games on the web. I program mainly in JavaScript, although I have a growing interest in Rust, and dabble in several other languages.</p>
    <p>As a student, from 2013 to 2015 I received a stipend for organizing a campaign to divest Davidson College's endowment from fossil fuel extraction companies. My responsibilites included petitioning, recruitment, training, mentorship, action planning, fundraising and media development. From 2014 through 2016 I sat on the Communications Committee for the Fossil Fuel Divestment Student Network, a body formed to try to destablize the fossil fuel industry by organizing divestment campaigns at colleges and universities across the United States. There, I built and maintained the organization's website and implemented web features for special projects, such as increasing donor engagement during a major fundraising campaign.</p>
    <p>During my teenage years I trained and performed as a jazz pianist. Today I continue my passion for music through the various small soundtracks I have created for indie video games.</p>
    <p>In my remaining time I enjoy scheming over how the left can win. I'm also investing much of my time improving my French.</p>
    <p>I speak English natively, and French competently.</p>
    <h2>Some photos</h2>
    <ProfileImage
      filename="cassette_presentation.jpg"
      caption="Presenting my open source library, Cassette, at the JavaScript Montréal Meetup (Dec 2018)"
    />
    <ProfileImage
      filename="game_jam.jpg"
      caption="Composing the soundtrack for the game Sk8Border at the Montréal Anti-Fascist Game Jam (Apr 2018)"
    />
    <ProfileImage
      filename="grad_proof.jpg"
      caption="Graduating from Davidson College (May 2015)"
    />
    <ProfileImage
      filename="trustees.jpg"
      caption="Challenging Davidson College board members on their resistance toward divestment from fossil fuel companies (Apr 2015)"
    />
    <ProfileImage
      filename="tunisia_walk.jpg"
      caption="Walking near the coast of Sidi Bou Saïd, Tunisia where I studied for one semester (May 2014)"
    />
    <ProfileImage
      filename="halloween.jpg"
      caption="At a Halloween party (Oct 2012)"
    />
  </Layout>
)

export default IndexPage
