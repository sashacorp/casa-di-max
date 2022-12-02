import React from 'react'
import Layout from '../components/layout'

export default function Template ({ pageContext }) {
    const { product } = pageContext
    return (
       <Layout>
       <h1>{product.title}</h1>
       <div>{product.description}</div>
       
       </Layout>
    
    )
}

