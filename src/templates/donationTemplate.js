import React from 'react'
import Layout from '../components/layout'

export default function Template ({ pageContext }) {
    const { product } = pageContext
    return (
        <>
      <MDXProvider components={shortcodes}>
       <Layout>
       <h1>{product.title}</h1>
       <div>{product.description}</div>
       {children}
       </Layout>
      </MDXProvider>
    </>
    )
}

