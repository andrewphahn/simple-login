import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import { resourceCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { LoginForm } from 'components'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (data, dispatch) => {
  return dispatch(resourceCreateRequest('login', data)).then((resp) => {
    const { success, errors, message } = resp
    if (!success) {
      throw new SubmissionError({
        username: errors.username,
        password: errors.password,
        _error: message,
      })
    }
    return resp
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
