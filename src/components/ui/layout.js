import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import NavBar from "./navbar"
import Footer from "./footer"

const useStyles = makeStyles(theme => ({
  spacer: {
    height: '2px',
    // background: theme.palette.common.gradient
  },
}))

function Layout({ children }) {
    const classes = useStyles()
    
  return (
    <>
     <NavBar/>
     <div className={classes.spacer}/>
      <main>
       {children}
      </main>
      <Footer style={{bottom: 0}}/>
    </>
  )
}


export default Layout