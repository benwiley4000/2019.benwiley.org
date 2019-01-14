import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import NavBar from './navbar'
import './layout.scss';

import { maxWidth } from './constants';
import navItems from '../navitems';

const Layout = ({ children, childProps }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          currentPathname={childProps.location.pathname}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            position: 'relative',
          }}
        >
          <NavBar navItems={navItems} />
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
