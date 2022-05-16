import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../../components/layout'

test('renders default layout', () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
  const element = screen.getAllByText('Product Tracker')
  expect(element).toBeDefined()
  expect(element.length).toBeGreaterThan(0)
})
