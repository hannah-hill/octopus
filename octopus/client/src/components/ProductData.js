import React from 'react'
import ProductSelect from './ProductSelect'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import ProductHero from './ProductHero'
import ProductDescription from './ProductDescription'
import ProductSpec from './ProductSpec'

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

const ProductData = ({ quantityCount, setQuantityCount, addToBasket }) => {
  const { data, loading, error } = useQuery(QUERY_PRODUCTS)

  if (loading) return <p>Loading...</p>
  if (error) return `Error -> ${error}`

  return (
    <>
      <main>
        <div className='ProductData'>
          <ProductHero
            img={data.product.imgUrl}
            name={data.product.name}
            power={data.product.power}
            quantity={data.product.quantity}
          />
          <ProductSelect
            data={data}
            quantityCount={quantityCount}
            setQuantityCount={setQuantityCount}
            addToBasket={addToBasket}
          />
          <ProductDescription description={data.product.description} />
          <ProductSpec
            brand={data.product.brand}
            weight={data.product.weight}
            height={data.product.height}
            width={data.product.width}
            length={data.product.length}
            modelCode={data.product.modelCode}
            colour={data.product.colour}
          />
        </div>
      </main>
    </>
  )
}

export default ProductData
