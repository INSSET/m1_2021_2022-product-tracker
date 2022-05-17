import { render, screen } from '@testing-library/react'
import Product from '../../pages/product/product'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

configure({ adapter: new Adapter() })

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Product', () => {
  it('renders Product page', () => {
    render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    )
    const el = screen.getAllByText('Vue détaillée')
    expect(el).toBeDefined()
    expect(el.length).toBeGreaterThan(0)
  })
})
