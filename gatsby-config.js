module.exports = {
  siteMetadata: {
    title: `trujamal`,
    description: `Hello there I'm a multidisciplinary designer and full stack developer, that's currently working on crafting responsive web user interfaces, and mobile applications.`,
    author: `@trujamal`,
    keywords: `Jamal, jamal rasool, trujamal, veve, veveusa,veve-llc, Jamal K Rasool, portfoliom sketch, iOS Developer, Full Stack developer, web developer, professional, jamal, jamal rasool`
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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Headericon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 's907tzls2pdt',
        accessToken: '337570188abd667a42a057300207e42a757f7f0c94a1a6063e82b6e60138804a'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
