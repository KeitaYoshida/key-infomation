require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `key infomation - IT・Gatsby技術ブログ -`,
    author: {
      name: `keita`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `IT技術ブログ key infomation 主にgatsby 関連の情報、gatsby cloud, netlify, contentful, shopifyの情報、記事を掲載`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/image`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        specialChars: "/:",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Dark+ (default dark)", // Read on for list of included themes. Also accepts object and function forms.
              wrapperClassName: "", // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
              injectStyles: true, // Injects (minimal) additional CSS for layout and scrolling
              extensions: [], // Third-party extensions providing additional themes and languages
              languageAliases: {}, // Map of custom/unknown language codes to standard/known language codes
              replaceColor: x => x, // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
              getLineClassName: ({
                // Function allowing dynamic setting of additional class names on individual lines
                content, //   - the string content of the line
                index, //   - the zero-based index of the line within the code fence
                language, //   - the language specified for the code fence
                meta, //   - any options set on the code fence alongside the language (more on this later)
              }) => "",
              logLevel: "warn", // Set to 'info' to debug if something looks wrong
            },
          },
        ],
        // plugins: [{
        //     resolve: `gatsby-remark-images`,
        //     options: {
        //       maxWidth: 590,
        //     },
        //   },
        //   {
        //     resolve: `gatsby-remark-responsive-iframe`,
        //     options: {
        //       wrapperStyle: `margin-bottom: 1.0725rem`,
        //     },
        //   },
        //   `gatsby-remark-prismjs`,
        //   `gatsby-remark-copy-linked-files`,
        //   `gatsby-remark-smartypants`,
        // ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-40073861-2",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jpgmny9mr6ft`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
