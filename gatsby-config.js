module.exports = {
  siteMetadata: {
    title: `trujamal`,
    description: `Hello there I'm a multidisciplinary designer and full stack developer, that's currently working on crafting responsive web user interfaces, and mobile applications.`,
    author: `@trujamal`,
    keywords: `Jamal, jamal rasool, trujamal, veve, minuteboo,veve-llc, Jamal K Rasool, portfoliom sketch, iOS Developer, Full Stack developer, web developer, professional, jamal, jamal rasool`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
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
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    // gatsby-plugin-offline: Enables Progressive Web App + Offline functionality
    // IMPORTANT: If enabled, this MUST be the last plugin in the array
    // WARNING: Can cause aggressive caching during development - clear cache if styles don't update
    // To enable: uncomment the line below and ensure it's last in the plugins array
    // Learn more: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
