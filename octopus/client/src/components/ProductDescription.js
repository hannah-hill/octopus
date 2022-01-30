import React from 'react'

const ProductDescription = ({ description }) => {
  return (
    <div className='ProductDescription'>
      <div className='ProductDescription__content'>
        <h2 className='h2'>Description</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProductDescription
