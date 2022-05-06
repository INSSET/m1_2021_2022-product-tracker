import { render, screen } from '@testing-library/react'
import Product from '../../components/product'

test('render a product', () => {
  render(<Product product={'Product 1'} seller={'seller 1'} dateAdded={'11-02-2022'} />)
  const element = screen.getAllByText('Product 1')
  expect(element).toBeDefined()
  expect(element.length).toBeGreaterThan(0)
})
