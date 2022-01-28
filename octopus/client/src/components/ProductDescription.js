import React from 'react'

const ProductDescription = ({ description }) => {
  return (
    <div className='ProductDescription'>
      <h2 className='h2'>Description</h2>
      <p>{description}</p>
    </div>
  )
}

export default ProductDescription
