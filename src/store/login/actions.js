export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'


export const login = ({ username, password }) => ({
  type: LOGIN,
  payload: {
    username,
    password,
  },
  meta: {
    username,
    thunk: `${username}Login`,
  },
})

export const loginSuccess = (user, meta) => ({
  type: LOGIN_SUCCESS,
  payload: user,
  meta,
})

export const loginFailure = (error, meta) => ({
  type: LOGIN_FAILURE,
  error: true,
  payload: error,
  meta,
})

export const logout = () => ({ type: LOGOUT })
