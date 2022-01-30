import React from 'react'
import SpecTable from './SpecTable'

const ProductSpec = ({
  brand,
  weight,
  height,
  width,
  length,
  modelCode,
  colour,
}) => {
  return (
    <div className='ProductSpec'>
      <div className='ProductSpec__container'>
        <h2 className='h2'>Specifications</h2>
        <SpecTable
          brand={brand}
          weight={weight}
          height={height}
          width={width}
          length={length}
          modelCode={modelCode}
          colour={colour}
        />
      </div>
    </div>
  )
}

export default ProductSpec
