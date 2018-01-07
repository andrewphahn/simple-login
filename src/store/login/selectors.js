export const initialState = {
  user: null,
}

export const getUser = (state = initialState) => state.user || initialState.user

export const getUsername = (state = initialState) => state.user ? state.user.username : ''
