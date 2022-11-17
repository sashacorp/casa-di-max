import * as React from 'react'
import NavBar from './navbar'


const Layout = ({children}) => {
    return (
      <main>
        <NavBar/>
        {children}
      </main>
    )
  }
  
  export default Layout
  