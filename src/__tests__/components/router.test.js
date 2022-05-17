import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Router from '../../routes/router'

test('renders router', () => {
  render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
  // Test that the router is rendered and does not throw an error
})
