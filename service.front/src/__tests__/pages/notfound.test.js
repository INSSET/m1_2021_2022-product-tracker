import { render, screen } from '@testing-library/react'
import NotFound from '../../pages/404/notfound'

test('renders not found page', () => {
  render(<NotFound />)
  const element = screen.getAllByText("There's nothing here!")
  expect(element).toBeDefined()
  expect(element.length).toBeGreaterThan(0)
})
