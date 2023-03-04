import * as React from "react"
import Layout from "../components/ui/layout"
import { Link, graphql } from "gatsby"



const Dogs = ({ data }) => {
  
  return (
    <Layout>
      <div className="dogs">
        <h1>Dogs</h1>
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

export const Head = () => <title>Dogs</title>

export default Dogs



export const query= graphql`
  query{
    allMdx(filter: {frontmatter: {slug: {regex: "\\/dogs//"}}}) {
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

