import { render, screen } from '@testing-library/react'
import Layout from '../../components/layout'

test('renders default layout', () => {
  render(<Layout />)
  const element = screen.getAllByText('Product Tracker')
  expect(element).toBeDefined()
  expect(element.length).toBeGreaterThan(0)
})
