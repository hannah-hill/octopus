import React from 'react'

const ProductSelect = ({
  data,
  quantityCount,
  setQuantityCount,
  addToBasket,
  id,
}) => {
  const splitInt = (price) => {
    return [...(price + '')].map(Number)
  }
  return (
    <div className='ProductSelect'>
      <>
        {data && (
          <p>
            £{splitInt(data.product.price).splice(0, 2).join('')}
            <span>.{splitInt(data.product.price).splice(-2).join('')}</span>
          </p>
        )}
      </>
      <div className='ProductSelect__quantity-container'>
        {quantityCount <= 1 ? (
          <button name='disabled-button' className='quantity-button--disabled'>
            -
          </button>
        ) : (
          <button
            name='decrease'
            data-testid='decrease'
            className='quantity-button'
            onClick={() => {
              setQuantityCount(quantityCount - 1)
            }}
          >
            -
          </button>
        )}
        <label>
          Quantity Count
          <input
            id='quantity-count'
            value={quantityCount}
            type='number'
            data-testid='quantity-count'
            readOnly
          />
        </label>
        <button
          className='quantity-button'
          name='increase'
          data-testid='increase'
          onClick={() => {
            setQuantityCount(quantityCount + 1)
          }}
        >
          +
        </button>
      </div>
      <button className='product__cart-button' onClick={() => addToBasket(id)}>
        Add to cart
      </button>
    </div>
  )
}

export default ProductSelect
