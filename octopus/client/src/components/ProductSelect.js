import React, { useState } from 'react'

const ProductSelect = ({ price, addToBasket, id }) => {
  const [qty, setQty] = useState(1)

  const onSubmit = (event) => {
    event.preventDefault()
    addToBasket(id, qty)
    setQty(1)
  }

  const splitInt = (n) => {
    return [...(n + '')].map(Number)
  }

  return (
    <div className='ProductSelect'>
      <form className='add-to-basket' onSubmit={onSubmit}>
        <div className='ProductSelect__content'>
          <>
            {price && (
              <p>
                {splitInt(price).splice(0, 2).join('')}
                <span>.{splitInt(price).splice(-2).join('')}</span>
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
                type='button'
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
            <div></div>
            <label>QTY</label>
            <input id='quantity-count' value={qty} type='number' readOnly />
            <button
              type='button'
              className='quantity-button'
              name='increase'
              onClick={() => {
                setQty(qty + 1)
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className='ProductSelect__button'>
          <input
            type='submit'
            className='ProductSelect__button'
            value='Add to cart'
          />
        </div>
      </form>
    </div>
  )
}

export default ProductSelect
