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
      <i>
        In case you've been clicking around this website looking for a list of
        skill buzzwords, look no further:
      </i>
    </p>
    <small>
      <ul className="skills-gradient">
        <li>JavaScript: expert</li>
        <li>React: expert</li>
        <li>TypeScript: expert</li>
        <li>C: pretty good but I wouldn't call myself an expert</li>
        <li>C++: what I said above but even more</li>
        <li>
          Lua: good enough to master PICO-8 but probably a lot I don't know
        </li>
        <li>Python: I was once pretty good with this</li>
        <li>C#: I can get around with it</li>
        <li>Java: purely academic experience</li>
        <li>Ruby: enough to know it's not Python</li>
      </ul>
    </small>
  </Fragment>
)

export default Contact
