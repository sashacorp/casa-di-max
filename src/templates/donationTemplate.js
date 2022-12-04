import React from 'react'
import Layout from '../components/layout'
import '../styles/styles.scss'

export default function Template ({ pageContext }) {
    const { product } = pageContext
    return (
       <Layout>
       <div className="donation">
        <h1>{product.title}</h1>
        <div>{product.description}</div>
       </div>
       </Layout>
    
    )
}

