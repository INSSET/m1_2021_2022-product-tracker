import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Product from '../../components/product'

test('render a product', () => {
  render(
    <BrowserRouter>
      <Product product={'Product 1'} seller={'seller 1'} dateAdded={'11-02-2022'} />
    </BrowserRouter>
  )
  const element = screen.getAllByText('Product 1')
  expect(element).toBeDefined()
  expect(element.length).toBeGreaterThan(0)
})
