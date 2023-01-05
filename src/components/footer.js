import * as React from 'react'
import {  useStaticQuery, graphql } from 'gatsby'
import { FooterImage } from './gatsby-images/footer'

import '../styles/styles.scss'

function Footer ({sitetitle, width}) {
   const data = useStaticQuery(graphql`
   query {
      site {
         siteMetadata {
            admin
         }
      }
   }`)
   return (
      <div className="footer">
         
            <p>powered by <a href="https://www.sashacorp.dev">{data.site.siteMetadata.admin}</a></p>
            <FooterImage />   
         
      </div>
   )
       
}

export default Footer

