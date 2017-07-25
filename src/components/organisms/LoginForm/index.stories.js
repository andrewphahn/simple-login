import React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginForm } from 'containers'

storiesOf('LoginForm', module)
  .add('default', () => (
    <LoginForm />
  ))
