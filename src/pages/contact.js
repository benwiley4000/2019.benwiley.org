import React, { Fragment } from 'react'

import SEO from '../components/seo'

const Contact = props => (
  <Fragment>
    <SEO
      title="Contact"
      keywords={['Ben Wiley', 'Contact', 'Email', 'GitHub', 'Twitter']}
    />
    <h1>Contact</h1>
    <p>
      <a href="mailto:therealbenwiley@gmail.com">therealbenwiley@gmail.com</a>
    </p>
    <p>
      <a href="https://github.com/benwiley4000">github.com/benwiley4000</a>
    </p>
    <p>
      <i>Here are the skill buzzwords you were looking for:</i>
    </p>
    <small>
      <ul className="skills-gradient">
        <li>JavaScript: expert</li>
        <li>TypeScript: expert</li>
        <li>NodeJS: expert</li>
        <li>React: expert</li>
        <li>Vue: pretty good</li>
        <li>C: decent, would like to use it more</li>
        <li>C++: decent, but wouldn't pretend to know all about it</li>
        <li>Lua: Fairly fluent in the PICO-8 variant (only)</li>
        <li>Python: was once alright</li>
        <li>C#: can get around</li>
        <li>Java: purely academic experience</li>
        <li>Ruby: can identify it isn't Python</li>
        <li>Rust: inexperienced, curious</li>
      </ul>
    </small>
  </Fragment>
)

export default Contact
