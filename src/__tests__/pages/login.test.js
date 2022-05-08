import { render, screen } from '@testing-library/react'

import Login from '../../pages/login/login'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import * as React from 'react'

configure({ adapter: new Adapter() })

describe('Login', () => {
  it('renders login page', () => {
    render(<Login />)
    const el = screen.getAllByText('Connexion')
    expect(el).toBeDefined()
    expect(el.length).toBeGreaterThan(0)
  })

  it('show/hide password', () => {
    const wrapper = mount(<Login />)

    wrapper.find('#inputShowPassword').simulate('click')
    expect(wrapper.find('#password').prop('type')).toEqual('text')
    wrapper.find('#inputShowPassword').simulate('click')
    expect(wrapper.find('#password').prop('type')).toEqual('password')
  })
})
