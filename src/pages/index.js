import * as React from "react"
import Layout from "../components/layout"
import WelcomeSection from "../components/welcomesection"
import FlashCards from "../components/flashcards"
import '../styles/styles.scss'
import MotivationalSection from "../components/motivationalsection"



const IndexPage = () => {
  return (
    <Layout>
       <WelcomeSection/>
       <FlashCards />
       <MotivationalSection />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
