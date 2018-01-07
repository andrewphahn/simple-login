import { initialState } from './selectors'
import {
  LOAD_DETAILS_SUCCESS,
} from './actions'

export default (state = initialState, { type, payload, meta }) => {

  switch (type) {
    case LOAD_DETAILS_SUCCESS:
      return {
        ...state,
        details: payload,
      }
    default:
      return state
  }
}
