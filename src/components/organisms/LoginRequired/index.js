import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Detail, Heading, Paragraph } from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledDetail = styled(Detail)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const LoginRequired = ({ loggedIn, LoginComponent, ToDisplay, ...props }) => {
  if (!loggedIn) {
    return <div {...props}> <LoginComponent /> </div>
  }
  return <ToDisplay />
}

LoginRequired.propTypes = {
  loggedIn: PropTypes.bool,
  LoginComponent: PropTypes.func,
  ToDisplay: PropTypes.func,
}

export default LoginRequired
