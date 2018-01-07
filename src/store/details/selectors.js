export const initialState = {
  details: null,
}

export const getDetails = (state = initialState) => state.details || initialState.details
