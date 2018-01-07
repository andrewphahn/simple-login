import * as actions from './actions'

test('login', () => {
  const data = {
    username: 'bob',
    password: 'password',
  }
  expect(actions.login(data))
    .toEqual(expect.objectContaining({
      type: actions.LOGIN,
      payload: data,
      meta: {
        username: data.username,
        thunk: 'bobLogin',
      },
    }))
})

test('loginSuccess', () => {
  const user = { stuff: 'bob' }
  const meta = { username: 'marley', think: 'foo' }
  expect(actions.loginSuccess(user, meta)).toEqual({
    type: actions.LOGIN_SUCCESS,
    payload: user,
    meta,
  })
})

test('loginFailure', () => {
  const meta = { username: 'marley', think: 'foo' }
  expect(actions.loginFailure('test', meta)).toEqual({
    type: actions.LOGIN_FAILURE,
    error: true,
    payload: 'test',
    meta,
  })
})

test('logout', () => {
  expect(actions.logout()).toEqual({ type: actions.LOGOUT })
})
