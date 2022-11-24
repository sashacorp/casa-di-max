import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const shortcodes = { Link } // Provide common components here

export default function Template( { data: { mdx } , children }) {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
query ($id: String!) {
  mdx(id: { eq: $id }) {
    id
    excerpt(pruneLength: 160)
    frontmatter {
        title
        slug
      }
  }
}
`