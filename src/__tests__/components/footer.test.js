import { render, screen } from '@testing-library/react'
import Footer from '../../components/footer'

test('renders footer', () => {
  render(<Footer />)
  const element = screen.getAllByText('Product Tracker')
  expect(element).toBeDefined()
  expect(element.length).toBeGreaterThan(0)
})
