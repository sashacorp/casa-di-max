import * as React from 'react'
import Footer from './footer'
import NavBar from './navbar'
import '../styles/styles.scss'


const Layout = ({children}) => {
    return (
      <main>
        <NavBar/>
        {children}
        <Footer/>
      </main>
    )
  }
  
  export default Layout
  