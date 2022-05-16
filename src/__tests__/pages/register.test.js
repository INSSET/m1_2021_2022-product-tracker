import { render, screen } from '@testing-library/react'

import Register from '../../pages/register/register'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

configure({ adapter: new Adapter() })

describe('Registration', () => {
  it('renders registration page', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )
    const el = screen.getAllByText('Inscription')
    expect(el).toBeDefined()
    expect(el.length).toBeGreaterThan(0)
  })

  it('show/hide password', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    wrapper.find('#inputShowPassword').simulate('click')
    expect(wrapper.find('#password').prop('type')).toEqual('text')
    wrapper.find('#inputShowPassword').simulate('click')
    expect(wrapper.find('#password').prop('type')).toEqual('password')
  })
})
