import React from 'react'

const ProductHero = ({ img, name, power, quantity }) => {
  return (
    <>
      <div className='product__img'>
        <img
          src={img}
          alt='An energy saving lightbulb'
          className='product__img-img'
        />
      </div>
      <div className='product__headers'>
        <h1 className='product__h1'>{name}</h1>
        <p className='product__subheader'>
          {power} // Packet of {quantity}
        </p>
      </div>
    </>
  )
}

export default ProductHero
