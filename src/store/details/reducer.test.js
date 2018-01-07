import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  details: 5,
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles LOGIN_SUCCESS', () => {
  const action = { type: actions.LOAD_DETAILS_SUCCESS, payload: 1 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, details: 1 })
  expect(reducer(altState, action)).toEqual({ ...altState, details: 1 })
})
