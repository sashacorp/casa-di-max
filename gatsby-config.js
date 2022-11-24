/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // Domain
    title: `Casa Di Max`,
    siteUrl: `https://www.yourdomain.tld`
  },
   // CMS
   // SASS
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-sass",
     // Google Analytics
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "342437115"
    }
    // images and sitemap 
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/logocasadimax.svg"
    }
    // mdx plugin
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
},{
  resolve: 'gatsby-source-filesystem',
  options: {
    "name": "posts",
    "path": `./src/mdx/posts`
  },
},{
  resolve: `gatsby-plugin-page-creator`,
  options: {
    path: `./src/mdx/posts`,
  },
}, "gatsby-plugin-mdx",
]
};