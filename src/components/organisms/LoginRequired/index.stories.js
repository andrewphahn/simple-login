import React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginRequired } from 'components'

storiesOf('LoginRequired', module)
  .add('default', () => (
    <LoginRequired />
  ))
