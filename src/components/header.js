import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { maxWidth } from './constants';

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: `1.45rem`,
      position: 'sticky',
      top: 0,
      zIndex: 1,
      borderBottom: '1px solid #ddd',
      background: 'white'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'inherit',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
