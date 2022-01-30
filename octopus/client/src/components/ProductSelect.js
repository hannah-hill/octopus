import React, { useState } from 'react'

const ProductSelect = ({ data, addToBasket, id }) => {
  const [qty, setQty] = useState(1)

  const onClick = (event) => {
    event.preventDefault()
    addToBasket(id, qty)
    setQty(1)
  }

  const splitInt = (price) => {
    return [...(price + '')].map(Number)
  }

  return (
    <div className='ProductSelect'>
      <div className='ProductSelect__content'>
        <>
          {data && (
            <p>
              {splitInt(data.product.price).splice(0, 2).join('')}
              <span>.{splitInt(data.product.price).splice(-2).join('')}</span>
            </p>
          )}
        </>
        <div className='ProductSelect__quantity'>
          {qty <= 1 ? (
            <button
              name='disabled-button'
              className='quantity-button--disabled'
            >
              -
            </button>
          ) : (
            <button
              name='decrease'
              data-testid='decrease'
              className='quantity-button'
              onClick={() => {
                setQty(qty - 1)
              }}
            >
              -
            </button>
          )}
          <label>QTY</label>
          <input
            id='quantity-count'
            value={qty}
            type='number'
            data-testid='quantity-count'
            readOnly
          />
          <button
            className='quantity-button'
            name='increase'
            data-testid='increase'
            onClick={() => {
              setQty(qty + 1)
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className='ProductSelect__button-wrapper'>
        <button className='ProductSelect__button' onClick={onClick}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductSelect
