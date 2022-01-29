import React from 'react'
import { render, screen, getByTestId } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import ProductSelect from '../components/ProductSelect'

test('should be able to add items to the basket', async () => {
  render(<ProductSelect />)
  const button = screen.getByText('Add to cart')
})

test('should be able to increase and decrease product quantity', () => {
  render(<ProductSelect />)
  const increase = screen.getByText('+')
  const decrease = screen.getByText('-')
  const qty = screen.getByDisplayValue('1')

  userEvent.click(increase)
  expect(qty.value).toEqual('2')

  userEvent.click(decrease)
  expect(qty.value).toEqual('1')
})
