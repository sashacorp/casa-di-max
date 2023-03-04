import React from 'react'
import Layout from "../components/ui/layout"


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

