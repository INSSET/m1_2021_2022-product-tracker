import { render, screen } from '@testing-library/react'
import Dashboard from '../../pages/dashboard/dashboard'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

configure({ adapter: new Adapter() })

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Dashboard', () => {
  it('renders Dashboard page', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    )
    const el = screen.getAllByText('Tableau de bord')
    expect(el).toBeDefined()
    expect(el.length).toBeGreaterThan(0)
  })
})
