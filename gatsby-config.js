module.exports = {
  siteMetadata: {
    title: `LUT Blog`,
    description: `Blog created following Level Up Pro gatsby 2 tutorial`,
    author: `Dan`,
    siteUrl: `https://blissful-morse-cb707b.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tutorial Blog`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#524736`,
        theme_color: `#524763`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
  ],
};
