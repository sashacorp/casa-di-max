import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import NavBar from "./navbar"
import Footer from "./footer"

const useStyles = makeStyles(theme => ({
   wholeBody: {
     margin: 0,
     padding: 0,
     backgroundColor:  theme.palette.primary.main,
   }, 
  spacer: {
    height: '2px',
    // background: theme.palette.common.gradient
  },
}))

function Layout({ children }) {
    const classes = useStyles()
    
  return (
    <div className={classes.wholeBody}>
     <NavBar/>
     <div className={classes.spacer}/>
      <main>
       {children}
      </main>
      <Footer style={{bottom: 0}}/>
    </div>
  )
}


export default Layout