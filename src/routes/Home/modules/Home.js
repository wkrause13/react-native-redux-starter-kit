// ------------------------------------
// Constants
// ------------------------------------
export const DEFAULT_ACTION = 'Home.DEFAULT_ACTION'

// ------------------------------------
// Actions
// ------------------------------------
export function defaultActionFunction (value = 1) {
  return {
    type: DEFAULT_ACTION,
    payload: value
  }
}

export const actions = {
  defaultActionFunction
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DEFAULT_ACTION]: (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export function HomeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
