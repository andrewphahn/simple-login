import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    details: null,
  })
})

test('getDetails', () => {
  expect(selectors.getDetails()).toEqual(selectors.initialState.details)
  expect(selectors.getDetails(selectors.initialState)).toEqual(selectors.initialState.details)
})
