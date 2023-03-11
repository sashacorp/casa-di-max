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
    siteUrl: `https://www.casadimax.org`,
    admin: `SashaCorp`,
    sardinienhunde: `https://www.sardinienhunde.org`,
    adminUrl: `https://www.sashacorp.dev`,
    
  },
   // CMS
   // SASS
  plugins: [ "gatsby-plugin-remove-serviceworker", "gatsby-plugin-netlify-cms", "gatsby-plugin-sass",
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Climate Crisis:i7:latin', 'Rufina:n6:n5:n4:n3:latin']
      }
    }
  },
  {
    resolve: `gatsby-plugin-material-ui`,
    
  },
  {
    resolve: `gatsby-plugin-netlify`,
    options: {
      headers: {
        "/**/*.html": [
          "cache-control: public",
          "cache-control: max-age=0",
          "cache-control: must-revalidate",
        ],
        "/page-data/*.json": [
          "cache-control: public",
          "cache-control: max-age=0",
          "cache-control: must-revalidate",
        ],
        "/app-data.json": [
          "cache-control: public",
          "cache-control: max-age=0",
          "cache-control: must-revalidate",
        ],
        "/static/*": [
          "cache-control: public",
          "cache-control: max-age=31536000",
          "cache-control: immutable",
        ],
      }, // option to add more headers. `Link` headers are transformed by the below criteria
      allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      mergeSecurityHeaders: true, // boolean to turn off the default security headers
      mergeCachingHeaders: true, // boolean to turn off the default caching headers
      transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    },
  },
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