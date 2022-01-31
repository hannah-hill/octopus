import React from 'react'
import {
  render,
  screen,
  getByTestId,
  act,
  wait,
  waitForElement,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import ProductSelect from '../components/ProductSelect'
import setBasket from '../App'
import addToBasket from '../App'
import qty from '../components/ProductSelect'

test('should be able to increase and decrease product quantity', async () => {
  render(<App />)
  const increase = await screen.findByText('+')
  const decrease = await screen.findByText('-')
  const qty = screen.getByDisplayValue('1')

  expect(increase).toBeInTheDocument()
  expect(decrease).toBeInTheDocument()
  expect(qty).toBeInTheDocument()

  userEvent.click(increase)
  expect(qty.value).toEqual('2')

  userEvent.click(decrease)
  expect(qty.value).toEqual('1')
})

test('should be able to add items to the basket', async () => {
  render(<App />)
  const button = await screen.findByText('Add to cart')
  const basketLogo = screen.getByTestId('basket-button')

  expect(button).toBeInTheDocument()
  expect(basketLogo).toBeInTheDocument()

  userEvent.click(basketLogo)
  const basket = await screen.findByText('Your basket is empty')

  expect(basket).toBeInTheDocument()

  userEvent.click(button)
  expect(basket).not.toBeInTheDocument()
})
