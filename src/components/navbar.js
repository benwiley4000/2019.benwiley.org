import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const navbarWidth = 180
const navbarMargin = 30

const NavBar = ({ navItems }) => (
  <nav
    style={{
      position: 'absolute',
      width: navbarWidth,
      left: 0 - (navbarWidth + navbarMargin)
    }}
  >
    {navItems.map(({ label, url }) =>
      <div key={label}>
        <Link
          to={url}
          getProps={({ isCurrent }) => isCurrent ? { className: 'current' } : null}
        >
          {label}
        </Link>
      </div>
    )}
  </nav>
)

NavBar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default NavBar
