/**
 * @type {import('gatsby').GatsbyConfig}
 */

const { TRUE } = require('sass');

 require("dotenv").config() 
 
module.exports = {
  flags: {
    DEV_SSR: true,
    /* FAST_DEV: true, 
     run all source plugins at the same time 
    PARALLEL_SOURCING: true, 
     log any attempts to mutate node directly
    DETECT_NODE_MUTATIONS: false,
    */ 
  },
  siteMetadata: {
    // Domain
    title: `Casa Di Max`,
    siteUrl: `https://www.yourdomain.tld`,
    admin: `SashaCorp`
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
  }, {
    resolve: "gatsby-plugin-sharp",
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `dominantColor`,
        quality: 50,
        breakpoints: [375, 768, 1366, 1920],
        backgroundColor: `transparent`,
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},

      }
    }
  }, "gatsby-transformer-sharp","gatsby-plugin-image","gatsby-plugin-mdx", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/logocasadimaxmin.png"
    }
    // mdx plugin
  }, {
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
}, 
// SHOPIFY 
{
  resolve: "gatsby-source-shopify",
    options: {
      password: process.env.SHOPIFY_PASSWORD,
      storeUrl: process.env.SHOPIFY_URL
    }
}
]
};