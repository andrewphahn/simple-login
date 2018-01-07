export const LOAD_DETAILS_REQUEST = 'LOAD_DETAILS_REQUEST'
export const LOAD_DETAILS_SUCCESS = 'LOAD_DETAILS_SUCCESS'
export const LOAD_DETAILS_FAILURE = 'LOAD_DETAILS_FAILURE'

export const loadDetailsRequest = () => ({
  type: LOAD_DETAILS_REQUEST,
  meta: {
    thunk: 'loadDetails',
  },
})

export const loadDetailsSuccess = (details, meta) => ({
  type: LOAD_DETAILS_SUCCESS,
  payload: details,
  meta,
})

export const loadDetailsFailure = (error, meta) => ({
  type: LOAD_DETAILS_FAILURE,
  error: true,
  payload: error,
  meta,
})
