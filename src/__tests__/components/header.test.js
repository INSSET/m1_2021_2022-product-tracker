import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/header'

test('renders header', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const element = screen.getAllByText('Product Tracker')
  expect(element).toBeDefined()
  expect(element.length).toBeGreaterThan(0)
})