import React, { useEffect, useState } from "react"
import Footer from './footer'
import NavBar from './navbar'
import '../styles/styles.scss'


function Layout ({children}) {
  const [windowWidth, setWindowWidth] = useState(0)
  // const [windowHeight, setWindowHeight] = useState(ClientTypes.Mobile.h)

  useEffect(() => {
    const updateWindowSize = () => {
      return setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateWindowSize)
  }, [])

    return (
      <main>
        <NavBar width={windowWidth}/>
        {children}
        <Footer/>
      </main>
    )
  }
  
  export default Layout
  