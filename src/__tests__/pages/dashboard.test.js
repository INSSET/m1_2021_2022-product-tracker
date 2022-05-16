import { render, screen } from '@testing-library/react'
import Dashboard from '../../pages/dashboard/dashboard'
import { configure, mount, act } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import * as React from 'react'
import axios from 'axios'
import PRODUCTS_MOCK from '../mocks/products.mock.js'
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

  // NOTe: these tests is not working but i hope to fix it in the future
  // it('test add product', () => {
  //   const wrapper = mount(<Dashboard />)
  //   axios.post.mockResolvedValue(PRODUCTS_MOCK)

  //   wrapper
  //     .find('#button-add-product')
  //     .simulate('click')
  //     .then((result) => {})
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   expect(axios.post).toContain(`/api/products`)
  //   const el = screen.getAllByText('Product X')
  //   expect(el).toBeDefined()
  //   expect(el.length).toBeGreaterThan(0)
  // })

  // it('should failed to add product', async () => {
  //   const wrapper = mount(<Dashboard />)

  //   // given
  //   const errorCode = 'network_error'
  //   axios.post.mockImplementation(() => Promise.reject({ status: 500, data: { errorCode: errorCode } }))
  //   // when
  //   wrapper.find('#button-add-product').simulate('click')

  //   // then
  //   //expect(axios.post).toHaveBeenCalledWith(`/api/products`)
  // })
})
