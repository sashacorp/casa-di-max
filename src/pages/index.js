import React, { useEffect, useState } from "react"
import ClientTypes from "../components/clienttypes"
import Layout from "../components/layout"
import WelcomeSection from "../components/welcomesection"
import FlashCards from "../components/flashcards"
import '../styles/styles.scss'
import MotivationalSection from "../components/motivationalsection"



function IndexPage() {
  const [windowWidth, setWindowWidth] = useState(ClientTypes.Mobile.w)
  const [windowHeight, setWindowHeight] = useState(ClientTypes.Mobile.h)

  useEffect(() => {
    const updateWindowSize = () => {
      return (
        setWindowWidth(window.innerWidth),
        setWindowHeight(window.innerHeight)
      )
    }
    window.addEventListener('resize', updateWindowSize)
  }, [windowWidth, windowHeight])

  return (
    <Layout>
       <WelcomeSection width={windowWidth}/>
       <FlashCards />
       <MotivationalSection />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
