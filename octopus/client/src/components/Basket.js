import React from 'react'

const Basket = ({ products }) => {
  return (
    <>
      <div>
        {products &&
          products.map((product) => (
            <div>
              <p>{product.name}</p>
              <p>{product.quantity}</p>
            </div>
          ))}
      </div>
    </>
  )
}

export default Basket
