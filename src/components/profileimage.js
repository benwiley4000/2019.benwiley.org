import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const ProfileImage = ({ data, filename, caption, right }) => {
  let image
  for (const edge of data.images.edges) {
    const img = edge.node.childImageSharp
    if (img && img.fluid.originalName === filename) {
      image = edge.node.childImageSharp
      break
    }
  }
  return (
    <figure className={'profile_image' + (right ? ' right' : '')}>
      <Img fluid={image.fluid} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { sourceInstanceName: { eq: "profile_photos" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ProfileImage {...props} data={data} />}
  />
)

ProfileImage.propTypes = {
  filename: PropTypes.string.isRequired,
  caption: PropTypes.string,
  right: PropTypes.bool.isRequired,
}

ProfileImage.defaultProps = {
  right: false,
}
