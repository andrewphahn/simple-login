import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { Block, Button } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: left;
  padding: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: left;
  width: 100%;
  max-width: ${size('maxWidth')};
`

const LogoutHeader = ({onLogout, ...props}) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <Button reverse transparent onClick={onLogout} >Logout</Button>
      </InnerWrapper>
    </Wrapper>
  )
}

LogoutHeader.propTypes = {
  onLogout: PropTypes.func.isRequired,
}

export default LogoutHeader
