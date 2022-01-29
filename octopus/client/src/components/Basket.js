import React from 'react'

const Basket = ({ products }) => {
  return (
    <>{products && products.map((product) => <h1>{product.quantity}</h1>)}</>
  )
}

export default Basket
