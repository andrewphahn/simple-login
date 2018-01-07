import React from 'react'

import { LoginRequired, LoginForm, DetailList } from 'containers'

const HomePage = () => {
  return (
    <LoginRequired LoginComponent={LoginForm} ToDisplay={DetailList} />
  )
}

export default HomePage
