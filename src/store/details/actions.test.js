import * as actions from './actions'

test('loadDetails', () => {
  expect(actions.loadDetailsRequest())
    .toEqual(expect.objectContaining({
      type: actions.LOAD_DETAILS_REQUEST,
      meta: {
        thunk: 'loadDetails',
      },
    }))
})

test('loadDetailsSuccess', () => {
  const details = { stuff: 'bob', nodeversion: '1.2.3' }
  const meta = { thunk: 'foo' }
  expect(actions.loadDetailsSuccess(details, meta)).toEqual({
    type: actions.LOAD_DETAILS_SUCCESS,
    payload: details,
    meta,
  })
})

test('loadDetailsFailure', () => {
  const meta = { thunk: 'foo' }
  expect(actions.loadDetailsFailure('test', meta)).toEqual({
    type: actions.LOAD_DETAILS_FAILURE,
    error: true,
    payload: 'test',
    meta,
  })
})
