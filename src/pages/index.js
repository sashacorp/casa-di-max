import React from "react"

import Layout from "../components/ui/layout"
import WelcomeSection from "../components/welcomesection"
import AboutUsSection from "../components/home/AboutUsSection"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  spacer: {
    height: '2px',
    background: theme.palette.common.gradient
  }
}))





function IndexPage() {
const classes = useStyles()
  return (
    <Layout>
       <WelcomeSection/>
       <div className={classes.spacer}/>
      <AboutUsSection />
      
       
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
