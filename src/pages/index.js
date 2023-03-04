import React from "react"

import Layout from "../components/ui/layout"
import WelcomeSection from "../components/welcomesection"
import AboutUsSection from "../components/home/AboutUsSection"







function IndexPage() {

  return (
    <Layout>
       <WelcomeSection/>
      <AboutUsSection />
      
       
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
