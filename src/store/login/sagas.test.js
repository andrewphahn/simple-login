import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'

const api = {
  post: () => { },
  get: () => {},
  put: () => {},
  delete: () => {},
}

const thunk = '123'
const username = 'dave'
const meta = { username, thunk }

describe('login', () => {
  const payload = { data: 'foo' }

  it('calls success', () => {
    const user = { success: true }
    const generator = sagas.login(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.post], sagas.LOGIN_API, payload))
    expect(generator.next(user).value)
      .toEqual(put(actions.loginSuccess(user, meta)))
  })

  it('calls failure on error', () => {
    const generator = sagas.login(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.post], sagas.LOGIN_API, payload))
    expect(generator.throw('test').value)
      .toEqual(put(actions.loginFailure('test', meta)))
  })

  it('calls failure on failure', () => {
    const failure = { success: false }
    const generator = sagas.login(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.post], sagas.LOGIN_API, payload))
    expect(generator.next(failure).value)
      .toEqual(put(actions.loginFailure(failure, meta)))
  })
})

test('watchLoginRequest', () => {
  const payload = { needle: 1 }
  const generator = sagas.watchLoginRequest(api, { payload, meta })
  expect(generator.next().value)
    .toEqual(call(sagas.login, api, payload, meta))
})

test('saga', () => {
  const generator = saga({ api })
  expect(generator.next().value).toEqual(takeEvery(actions.LOGIN, sagas.watchLoginRequest, api))
})
