const _ = require("lodash")

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: ``,
    description: ``,
    author: `@mattfeng`,
    siteUrl: `https://freeinsulin.github.io/`,
  },
  plugins: [
    `gatsby-plugin-slug`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [require("remark-gfm")],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              mdx: false,
              exclude: "Table of Contents",
              tight: true,
              ordered: false,
              fromHeading: 1,
              toHeading: 4,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<span><sup>#</sup></span>`,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: true,
              markdownCaptions: true,
              wrapperStyle: fluidResult =>
                `flex:${_.round(fluidResult.aspectRatio, 2)};`,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
  ],
}
