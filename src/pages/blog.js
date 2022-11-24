import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"



const Blog = () => {
  return (
    <Layout>
      <Link to="/post-1">Post</Link>
    </Layout>
  )
}

export default Blog

export const Head = () => <title>Blog</title>
