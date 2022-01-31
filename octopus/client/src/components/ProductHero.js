import React from 'react'
import ProductSelect from './ProductSelect'

const ProductHero = ({
  img,
  name,
  power,
  quantity,
  price,
  id,
  addToBasket,
}) => {
  return (
    <>
      <div className='ProductHero'>
        <div className='product__img'>
          <img
            src={img}
            alt='An energy saving lightbulb'
            className='product__img-img'
          />
        </div>
        <div className='ProductData__top--desktop'>
          <div className='product__headers'>
            <div>
              <h1 className='product__h1'>{name}</h1>
              <p className='product__subheader'>
                {power} <span>//</span> Packet of {quantity}
              </p>
            </div>
          </div>
          <ProductSelect
            price={price}
            addToBasket={addToBasket}
            id={id}
            name={name}
            img={img}
          />
        </div>
      </div>
    </>
  )
}

export default ProductHero
