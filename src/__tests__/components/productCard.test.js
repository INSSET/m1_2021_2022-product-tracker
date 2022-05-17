import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProductCard from '../../components/productCard'

test('render a product', () => {
  render(
    <BrowserRouter>
      <ProductCard productId={1} productName={'Product 1'} priceLimit={15} dateAdded={'11-02-2022'} />
    </BrowserRouter>
  )
  const productName = screen.getAllByText('Product 1')
  const priceLimit = screen.getAllByText("Prix d'alerte : 15.00 €")

  expect(productName).toBeDefined()
  expect(productName.length).toBeGreaterThan(0)

  expect(priceLimit).toBeDefined()
  expect(priceLimit.length).toBeGreaterThan(0)
})
