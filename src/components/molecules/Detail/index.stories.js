import React from 'react'
import { storiesOf } from '@storybook/react'
import { Detail } from 'components'

storiesOf('Detail', module)
  .add('default', () => (
    <Detail title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Detail>
  ))
  .add('with link', () => (
    <Detail title="ARc" link="https://github.com/diegohaz/arc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Detail>
  ))
  .add('with icon', () => (
    <Detail icon="close" title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Detail>
  ))
  .add('with code', () => (
    <Detail code="npm run build" title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Detail>
  ))
  .add('with soon', () => (
    <Detail soon title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Detail>
  ))
