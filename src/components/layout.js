import React, { useEffect, useState } from "react"
import Footer from './footer'
import NavBar from './navbar'
import ClientTypes from "./clienttypes"
import '../styles/styles.scss'


function Layout ({children}) {
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
      <main>
        <NavBar width={windowWidth}/>
        <div width={windowWidth}>{children}</div>
        <Footer/>
      </main>
    )
  }
  
  export default Layout
  