import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { LogoutHeader } from 'components'

const LoginBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${palette('grayscale', 0, true)};
  border-radius: 0.125em;
  color: ${palette('grayscale', 0)};
  top: auto;
  left: calc(50% - 10rem);
  right: auto;
  bottom: auto;
  margin: 1rem;
  outline: none;
  box-sizing: border-box;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(100% - 1rem);
  padding-top: '1rem';
`

const LoginRequired = ({ loggedIn, LoginComponent, ToDisplay, onLogout, ...props }) => {
  if (!loggedIn) {
    return <LoginBox {...props}><LoginComponent /></LoginBox>
  }
  return <div><LogoutHeader onLogout={onLogout} /><ToDisplay /></div>
}

LoginRequired.propTypes = {
  loggedIn: PropTypes.bool,
  LoginComponent: PropTypes.func,
  ToDisplay: PropTypes.func,
  onLogout: PropTypes.func,
}

export default LoginRequired
