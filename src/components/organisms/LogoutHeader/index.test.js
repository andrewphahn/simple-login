import React from 'react'
import { shallow } from 'enzyme'
import LogoutHeader from '.'

const wrap = (props = {}) => shallow(<LogoutHeader {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
