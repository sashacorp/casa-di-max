import * as React from "react"
import Layout from "../components/layout"
import WelcomeSection from "../components/welcomesection"
import HomePageContent from "../components/homepagecontent"
import '../styles/styles.scss'



const IndexPage = () => {
  return (
    <Layout>
       <WelcomeSection/>
       <HomePageContent />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
