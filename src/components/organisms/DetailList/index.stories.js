import React from 'react'
import { storiesOf } from '@storybook/react'
import { DetailList } from 'components'

storiesOf('DetailList', module)
  .add('default', () => (
    <DetailList />
  ))
