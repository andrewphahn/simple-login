import React from 'react'
import { reduxForm } from 'redux-form'
import { resourceCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { LoginForm } from 'components'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (data, dispatch) => dispatch(resourceCreateRequest('login', data))

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
