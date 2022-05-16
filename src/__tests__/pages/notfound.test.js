import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../../pages/notfound/notfound'

test('renders not found page', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )
  const element = screen.getAllByText("There's nothing here!")
  expect(element).toBeDefined()
  expect(element.length).toBeGreaterThan(0)
})
