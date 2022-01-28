import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const productId = 1

const QUERY_PRODUCTS = gql`
  query {
    product(productId: ${productId}) {
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

const ProductData = () => {
  const { data, loading, error } = useQuery(QUERY_PRODUCTS)
  if (loading) return <p>Loading...</p>
  if (error) return `Error -> ${error}`

  return (
    <>
      <p>{data.product.name}</p>
      <p>{data.product.power}</p>
    </>
  )
}

export default ProductData
