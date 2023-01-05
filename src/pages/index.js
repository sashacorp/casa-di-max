import React from "react"

import Layout from "../components/layout"
import WelcomeSection from "../components/welcomesection"
import FlashCards from "../components/flashcards"


import '../styles/styles.scss'




function IndexPage() {

  return (
    <Layout>
       <WelcomeSection/>
       <FlashCards />
      
       
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
