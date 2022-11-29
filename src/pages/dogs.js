import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const Dogs = () => {
  return (
    <Layout>
      <Link to="/dogs/dog-1">Dog</Link>
    </Layout>
  )
}

export default Dogs

export const Head = () => <title>Dogs</title>
