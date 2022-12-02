import * as React from 'react'
import {  useStaticQuery, graphql } from 'gatsby'
import '../styles/styles.scss'

const Footer = ({siteTitle}) => {
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
         <h1 siteTitle="Footer">Footer</h1>
         <p>powered by {data.site.siteMetadata.admin}</p>
      </div>
   )
}

export default Footer

