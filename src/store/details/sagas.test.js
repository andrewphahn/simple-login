// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'

const api = {
  post: () => {},
  get: () => {},
  put: () => {},
  delete: () => {},
}

const thunk = '123'
const meta = { thunk }

describe('loadDetails', () => {
  it('calls success', () => {
    const details = { foo: 'bar' }
    const generator = sagas.loadDetails(api, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.get], sagas.DETAIL_API))
    expect(generator.next(details).value)
      .toEqual(put(actions.loadDetailsSuccess(details, meta)))
  })

  it('calls failure on error', () => {
    const generator = sagas.loadDetails(api, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.get], sagas.DETAIL_API))
    expect(generator.throw('test').value)
      .toEqual(put(actions.loadDetailsFailure('test', meta)))
  })
})

test('watchLoadDetailsRequest', () => {
  const generator = sagas.watchLoadDetailsRequest(api, { meta })
  expect(generator.next().value)
    .toEqual(call(sagas.loadDetails, api, meta))
})

test('saga', () => {
  const generator = saga({ api })
  expect(generator.next().value).toEqual(takeEvery(actions.LOAD_DETAILS_REQUEST, sagas.watchLoadDetailsRequest, api))
})
