import React, { useState } from 'react'
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

const ProductData = ({ quantityCount, setQuantityCount }) => {
  const { data, loading, error } = useQuery(QUERY_PRODUCTS)

  if (loading) return <p>Loading...</p>
  if (error) return `Error -> ${error}`

  const splitInt = (price) => {
    return [...(price + '')].map(Number)
  }

  return (
    <>
      <div className='product__container'>
        <div className='product__img'>
          <img
            src={data.product.imgUrl}
            alt='An energy saving lightbulb'
            className='product__img-img'
          />
        </div>
        <div className='product__headers'>
          <h1 className='product__h1'>{data.product.name}</h1>
          <p className='product__subheader'>
            {data.product.power} // Packet of {data.product.quantity}
          </p>
        </div>
        <div className='product__shop'>
          {splitInt(data.product.price)}
          <p>
            £{splitInt(data.product.price).splice(0, 2).join('')}
            <span>.{splitInt(data.product.price).splice(-2).join('')}</span>
          </p>
          <div className='product__quantity'>
            {quantityCount <= 1 ? (
              <button className='quantity-button--disabled'>-</button>
            ) : (
              <button
                className='quantity-button'
                onClick={() => {
                  setQuantityCount(quantityCount - 1)
                }}
              >
                -
              </button>
            )}
            <p>{quantityCount}</p>
            <button
              onClick={() => {
                setQuantityCount(quantityCount + 1)
              }}
            >
              +
            </button>
          </div>
          <button className='product__cart-button'>Add to cart</button>
        </div>
        <div className='product__description'>
          <h2 className='h2'>Description</h2>
          <p>{data.product.description}</p>
        </div>
        <div className='product__specifications'>
          <h2 className='h2'>Specifications</h2>
          <div className='product__specifications-content'></div>
        </div>
      </div>
    </>
  )
}

export default ProductData
