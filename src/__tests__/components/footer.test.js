import { render, screen } from '@testing-library/react'
import Footer from '../../components/footer'
import { BrowserRouter } from 'react-router-dom'

test('renders footer', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
  const element = screen.getAllByText('Product Tracker')
  expect(element).toBeDefined()
  expect(element.length).toBeGreaterThan(0)
})
