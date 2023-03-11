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
  
  
}))




const Dogs = () => {
  // const classes = useStyles()
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

export const Head = () => <title>Dogs</title>

export default Dogs



export const query= graphql`
  query{
    allMdx(filter: {frontmatter: {slug: {regex: "\\/dogs//"}}}) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
          tableOfContents(maxDepth: 10)
          internal {
            contentFilePath
          }
        }
      }
      pageInfo {
        currentPage
      }
    }
  }`

