require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Anablock",
    description: "We provide Salesforce consulting and system integration services.",
    author: "Anastasia Technology LLC",
    twitterUsername: "@VukDukic",
    image: "/favicon.png",
    siteUrl: "https://www.anablock.com"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `careers`,
        path: `${__dirname}/src/careers/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.anablock.com',
        sitemap: 'hhttps://www.anablock.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anablock`,
        short_name: `Anablock`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148391227-1",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1726109470873000',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
  ],
}
