import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { LogoutHeader } from 'components'

storiesOf('LogoutHeader', module)
  .add('default', () => (
    <LogoutHeader onLogout={action('logout')} />
  ))
