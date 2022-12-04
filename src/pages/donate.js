import * as React from "react"
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby'
import '../styles/styles.scss'


const Donate = ({ data }) => {
  return (
    <Layout>
     <div className="donate">
     <h1>Dona</h1>
      <ul>
       {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyId}>
          <h3>
            <Link to={`/donate/${node.handle}`}>{node.title}</Link>
            {" - "}${node.priceRangeV2.minVariantPrice.amount}
          </h3>
          <p>{node.description}</p>
        </li>
       ))}
      </ul>
     </div>
    </Layout>
  )
}


export const Head = () => <title>Donate</title> 

export default Donate

export const query = graphql`
 { allShopifyProduct(sort: {title: ASC }) {
   edges {
    node {
      title
      shopifyId
      description
      handle
      priceRangeV2 {
        minVariantPrice {
          amount
        }
      }
    }
   }
 }
}
`


