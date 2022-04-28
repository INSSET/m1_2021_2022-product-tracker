import { render, screen } from '@testing-library/react'

import Register from '../../pages/register/register'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import * as React from 'react'

configure({ adapter: new Adapter() })

describe('Registration', () => {
  it('renders registration page', () => {
    render(<Register />)
    const el = screen.getAllByText('Inscription')
    expect(el).toBeDefined()
    expect(el.length).toBeGreaterThan(0)
  })

  it('show/hide password', () => {
    const wrapper = mount(<Register />)

    wrapper.find('#inputShowPassword').simulate('click')
    expect(wrapper.find('#password').prop('type')).toEqual('text')
    wrapper.find('#inputShowPassword').simulate('click')
    expect(wrapper.find('#password').prop('type')).toEqual('password')
  })
})
