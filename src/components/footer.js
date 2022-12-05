import * as React from 'react'
import {  useStaticQuery, graphql } from 'gatsby'
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
         <h1 sitetitle="Footer">Footer</h1>
         <p>powered by {data.site.siteMetadata.admin}</p>
      </div>
   )
}

export default Footer

