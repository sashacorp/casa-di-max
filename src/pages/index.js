import * as React from "react"
import Layout from "../components/layout"
import WelcomeSection from "../components/welcomesection"



const IndexPage = () => {
  return (
    <Layout>
       <WelcomeSection/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
