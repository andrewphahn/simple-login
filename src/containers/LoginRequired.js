import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from 'store/actions'
import { fromLogin } from 'store/selectors'

import { LoginRequired } from 'components'

class LoginRequiredContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
    LoginComponent: PropTypes.func,
    ToDisplay: PropTypes.func,
    onLogout: PropTypes.func,
  }

  render() {
    const { user, LoginComponent, ToDisplay, onLogout } = this.props
    const loggedIn = !!user
    return <LoginRequired {...{ loggedIn, LoginComponent, ToDisplay, onLogout }} />
  }
}

const mapStateToProps = state => ({
  user: fromLogin.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginRequiredContainer)
