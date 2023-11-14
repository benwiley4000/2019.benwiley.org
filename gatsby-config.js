module.exports = {
  siteMetadata: {
    title: `Ben Wiley`,
    siteUrl: `https://benwiley.org`,
    description: `Ben Wiley's site`,
    author: `Ben Wiley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `profile_photos`,
        path: `${__dirname}/src/images/profile_photos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `benwiley.org`,
        short_name: `benwiley.org`,
        start_url: `/`,
        background_color: `#FFC300`,
        theme_color: `#FFC300`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  pathPrefix: '/',
}
