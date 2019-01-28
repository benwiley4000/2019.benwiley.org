import { Link, withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const NavBar = ({ navItems }) => (
  <nav className="main_nav">
    {navItems.map(({ label, url }) => (
      <div className="nav_item" key={label}>
        <Link
          to={url}
          getProps={({ location }) => {
            const trimmed = {
              pathname: location.pathname,
              url: withPrefix(url),
            }
            for (const p of ['pathname', 'url']) {
              // chop off any / at the end
              while (
                trimmed[p].length > 1 &&
                trimmed[p][trimmed[p].length - 1] === '/'
              ) {
                trimmed[p] = trimmed[p].slice(0, -1)
              }
            }
            return trimmed.pathname === trimmed.url
              ? { className: 'current' }
              : null
          }}
        >
          {label}
        </Link>
      </div>
    ))}
  </nav>
)

NavBar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default NavBar
