import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const NavBar = ({ navItems }) => (
  <nav className="main_nav">
    {navItems.map(({ label, url }) => (
      <div className="nav_item" key={label}>
        <Link
          to={url}
          getProps={({ location }) => {
            let trimmedPathname = location.pathname
            // chop off any / at the end
            while (
              trimmedPathname.length > 1 &&
              trimmedPathname[trimmedPathname.length - 1] === '/'
            ) {
              trimmedPathname = trimmedPathname.slice(0, -1)
            }
            return trimmedPathname === url ? { className: 'current' } : null
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
