import * as React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import '../styles/styles.scss'


const Blog = ({ data }) => {
  
  return (
    <Layout>
      <div className="blog">
        <h1>Blog</h1>
        <ul>
          {data.allMdx.edges.map(({ node }) => (
            <li key={node.id}>
               <Link to={`${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
            </li>
          ))}
       </ul>
      </div>  
    </Layout>
  )
}

export const Head = () => <title>Blog</title>

export default Blog



export const query= graphql`
  query{
    allMdx(filter: {frontmatter: {slug: {regex: "\\/blog//"}}}) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
          tableOfContents(maxDepth: 10)
          internal {
            contentFilePath
          }
        }
      }
      pageInfo {
        currentPage
      }
    }
  }`

