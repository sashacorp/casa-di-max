import * as React from 'react'
import {  useStaticQuery, graphql } from 'gatsby'
import { FooterImage } from './gatsby-images/footer'
import '../styles/styles.scss'

const Footer = ({sitetitle}) => {
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
          <FooterImage />   
      </div>
   )
       
}

export default Footer

