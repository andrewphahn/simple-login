import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import { login } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { LoginForm } from 'components'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (data, dispatch) => {
  return dispatch(login(data)).catch((err) => {
    const { success, errors, message } = err
    if (!success) {
      throw new SubmissionError({
        username: errors.username,
        password: errors.password,
        _error: message,
      })
    }
  })
}

const validate = createValidator({
  username: [required],
  password: [required],
})

export default reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
})(LoginFormContainer)
