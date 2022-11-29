import React from "react"
import { graphql} from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import  Layout  from "../components/layout"

const shortcodes = { Link, Layout } // Provide common components here

export default function PageTemplate({ data, children }) {
 
  return (
    <>
      <MDXProvider components={shortcodes}>
       <Layout>
       {children}
       </Layout>
      </MDXProvider>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id 
      frontmatter {
        title
      }
    }
  } `