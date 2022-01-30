import React from 'react'
import ProductSelect from './ProductSelect'
import { useQuery } from '@apollo/react-hooks'
import ProductHero from './ProductHero'
import ProductDescription from './ProductDescription'
import ProductSpec from './ProductSpec'
import { QUERY_PRODUCTS } from '../helpers/api'

const productId = 1

const ProductData = ({ addToBasket }) => {
  const { data, loading, error } = useQuery(QUERY_PRODUCTS, {
    variables: { productId },
  })

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
            price={data.product.price}
            addToBasket={addToBasket}
            id={productId}
          />
          <div className='ProductData__bottom--desktop'>
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
        </div>
      </main>
    </>
  )
}

export default ProductData
