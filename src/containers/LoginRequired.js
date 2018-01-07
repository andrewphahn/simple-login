import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromLogin } from 'store/selectors'

import { LoginRequired } from 'components'

class LoginRequiredContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
    LoginComponent: PropTypes.func,
    ToDisplay: PropTypes.func,
  }

  render() {
    const { user, LoginComponent, ToDisplay } = this.props
    const loggedIn = !!user
    return <LoginRequired {...{ loggedIn, LoginComponent, ToDisplay }} />
  }
}

const mapStateToProps = (state) => {
  console.log('LoginRequiredContainer.mapStateToProps', state)
  return {
    user: fromLogin.getUser(state),
  }
}

export default connect(mapStateToProps)(LoginRequiredContainer)
