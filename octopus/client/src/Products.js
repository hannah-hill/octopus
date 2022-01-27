import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const QUERY_PRODUCTS = gql`
  query {
    product(productId: 1) {
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

export function ProductData() {
  const { data, loading } = useQuery(QUERY_PRODUCTS)
  if (loading) return <p>Loading...</p>

  return (
    <>
      <p>{data.product.name}</p>
      <p>{data.product.power}</p>
    </>
  )
}
