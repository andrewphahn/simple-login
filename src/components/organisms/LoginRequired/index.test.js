import React from 'react'
import { shallow } from 'enzyme'
import LoginRequired from '.'

const wrap = (props = {}) => shallow(<LoginRequired {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
