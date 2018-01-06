import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const LoginForm = ({ error, handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={2}>Login</Heading>
      {error && <Heading level={2}>{error}</Heading>}
      <Field name="username" label="User Name" component={ReduxField} />
      <Field name="password" label="Password" type="password" component={ReduxField} />
      <Button type="submit" disabled={submitting}>Login</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  error: PropTypes.string,
}

export default LoginForm
