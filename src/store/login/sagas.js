import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export const LOGIN_API = '/login'

export function* login(api, payload, meta) {
  try {
    const user = yield call([api, api.post], LOGIN_API, payload)
    if (user && user.success) {
      yield put(actions.loginSuccess(user, meta))
    } else {
      yield put(actions.loginFailure(user, meta))
    }
  } catch (e) {
    yield put(actions.loginFailure(e, meta))
  }
}

export function* watchLoginRequest(api, { payload, meta }) {
  yield call(login, api, payload, meta)
}

export default function* ({ api }) {
  yield takeEvery(actions.LOGIN, watchLoginRequest, api)
}
