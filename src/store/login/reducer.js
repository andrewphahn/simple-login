// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import { initialState } from './selectors'
import { LOGIN_SUCCESS, LOGOUT } from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
      }
    case LOGOUT:
      return {
        ...state,
        user: initialState.user,
      }
    default:
      return state
  }
}
