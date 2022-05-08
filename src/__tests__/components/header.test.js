import { render, screen } from '@testing-library/react'
import Header from '../../components/header'

test('renders header', () => {
  render(<Header />)
  const element = screen.getAllByText('Product Tracker')
  expect(element).toBeDefined()
  expect(element.length).toBeGreaterThan(0)
})
