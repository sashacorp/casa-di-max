import * as React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"



const Cats = ({ data }) => {
  
  return (
    <Layout>
       <ul>
          {data.allMdx.edges.map(({ node }) => (
            <li key={node.id}>
               <Link to={`${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
            </li>
          ))}
       </ul>
    </Layout>
  )
}

export const Head = () => <title>Cats</title>

export default Cats



export const query= graphql`
  query{
    allMdx(filter: {frontmatter: {slug: {regex: "\\/cats//"}}}) {
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

