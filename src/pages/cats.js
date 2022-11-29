import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"



const Cats = () => {
  return (
    <Layout>
      <Link to="/cats/cat-1">Cat</Link>
    </Layout>
  )
}

export default Cats

export const Head = () => <title>Cats</title>
