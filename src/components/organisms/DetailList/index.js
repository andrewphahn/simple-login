import React from 'react'
import styled from 'styled-components'

import { Detail, Link, Heading, Paragraph } from 'components'

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

const DetailList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>App Details</StyledHeading>
    <Description>
      A quick list of info for this app.
    </Description>
    <Grid>
      <StyledDetail
        icon="node"
        link="https://nodejs.org"
        title="Node.js"
        code="6.3.13 - TODO: Fetch from server"
      >
        Node.js® is a JavaScript runtime built on Chrome&apos;s V8 JavaScript engine.
      </StyledDetail>
      <StyledDetail
        icon="path"
        link="http://dursocapital.com/wp-content/uploads/2015/09/stay-the-path.jpg"
        title="Path"
        code="/Users/oren/src/simple-login"
      >
        Path where the app is running
      </StyledDetail>
      <StyledDetail
        icon="date"
        link="https://en.wikipedia.org/wiki/Date_palm#Dates"
        title="Date - Time"
        code="Tue Mar 24 2015 18:00:00 GMT-0600 (MDT)"
      >
        Current date and time on the server
      </StyledDetail>
      <StyledDetail
        icon="user"
        link="https://en.wikipedia.org/wiki/User_(computing)"
        title="User details"
        code="Admin user"
      >
        Logged in user
      </StyledDetail>
    </Grid>
  </div>
)

export default DetailList
