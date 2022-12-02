
exports.createPages =  async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/postsTemplate.js`)
  const catTemplate = require.resolve(`./src/templates/catsTemplate`)
  const dogTemplate = require.resolve(`./src/templates/dogsTemplate`)
  const donationTemplate = require.resolve(`./src/templates/donationTemplate`)

  // POSTS 
  const blogPost = await graphql(`
    query {
      allMdx(
        limit: 1000
        filter: {frontmatter: {slug: {regex: "\/blog//"}}}
        ){
          nodes {
            id
            frontmatter {
                 title,
                 slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
  `).then( result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

      result.data.allMdx.nodes.forEach( node  => {
      createPage({
        path: node.frontmatter.slug,
        component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          title: node.frontmatter.title,
          id: node.id,
        },
      })
    })
  })

  // CATS 

  const cat = await graphql(`
    query {
      allMdx(
        limit: 1000
        filter: {frontmatter: {slug: {regex: "\/cats//"}}}
        ){
          nodes {
            id
            frontmatter {
                 title,
                 slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
  `).then( result=> {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

      result.data.allMdx.nodes.forEach( node  => {
      createPage({
        path: node.frontmatter.slug,
        component: `${catTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          title: node.frontmatter.title,
          id: node.id,
        },
      })
    })
  })

  // DOGS 

  const dog = await graphql(`
    query {
      allMdx(
        limit: 1000
        filter: {frontmatter: {slug: {regex: "\/dogs//"}}}
        ){
          nodes {
            id
            frontmatter {
                 title,
                 slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
  `).then( result=> {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

      result.data.allMdx.nodes.forEach( node  => {
      createPage({
        path: node.frontmatter.slug,
        component: `${dogTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          title: node.frontmatter.title,
          id: node.id,
        },
      })
    })
  })

  // DONATION

  const donation =await graphql(`
  query {
    allShopifyProduct(sort: { title: ASC }) {
      edges {
        node {
          title
          shopifyId
          handle
          description
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          status
        }
      }
    }
  }
  `).then( result=> {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/donate/${node.handle}`,
      component: `${donationTemplate}`,
      context: {
        product: node,
      },
    })
  })
}) 

  return Promise.all([blogPost, cat, dog, donation])


}