import { gql } from 'apollo-boost'

export const QUERY_PRODUCTS = gql`
  query ($productId: ID) {
    product(productId: $productId) {
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      modelCode
      colour
      imgUrl
    }
  }
`
