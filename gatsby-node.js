
exports.createPages =  async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/posts.js`)

  const blogPost = await graphql(`
    query {
      allMdx(limit: 1000){
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
  `).then( blogPost => {
    if (blogPost.errors) {
      return Promise.reject(blogPost.errors)
    }

      blogPost.data.allMdx.nodes.forEach( node  => {
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
  
  return blogPost


}