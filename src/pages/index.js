import React from "react"

import Layout from "../components/ui/layout"
// import WelcomeSection from "../components/welcomesection"
import AboutUsSection from "../components/home/AboutUsSection"
import { makeStyles } from "@material-ui/core/styles"
import Animation from "../components/home/Animation"
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  spacer: {
    
    height: '1rem',
    backgroundColor: theme.palette.primary.main
  },
  mainContainer: {
    height: '50rem'
  },
  
  
}, {index: 1}))





function IndexPage() {
const classes = useStyles()
  return (
    <Layout>
        <Grid container classes={{root: classes.mainContainer}}>
      <Animation />
      </Grid>
       <div className={classes.spacer}/>

      <AboutUsSection />
      
       
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
