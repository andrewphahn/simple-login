import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export const DETAIL_API = '/detail'

export function* loadDetails(api, meta) {
  try {
    const details = yield call([api, api.get], DETAIL_API)
    yield put(actions.loadDetailsSuccess(details, meta))
  } catch (e) {
    yield put(actions.loadDetailsFailure(e, meta))
  }
}

export function* watchLoadDetailsRequest(api, { meta }) {
  yield call(loadDetails, api, meta)
}

export default function* ({ api }) {
  yield takeEvery(actions.LOAD_DETAILS_REQUEST, watchLoadDetailsRequest, api)
}
