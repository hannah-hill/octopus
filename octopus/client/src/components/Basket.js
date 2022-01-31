import React from 'react'

const Basket = ({ products }) => {
  return (
    <>
      <div className='Basket'>
        {products.length ? (
          products.map((product) => (
            <div className='Basket__product' key={product.productId}>
              <img src={product.img} alt='preview image' />
              <p>{product.name}</p>
              <p>{product.quantity}</p>
            </div>
          ))
        ) : (
          <div className='Basket__empty'>
            <p>Your basket is empty</p>
          </div>
        )}
        <button>View basket</button>
      </div>
    </>
  )
}

export default Basket
