import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/types'

const initialState = {}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_MESSAGE:
      return {
        ...state,
        text: payload.text,
        kind: payload.kind
      }

    case CLEAR_MESSAGE:
      return { payload: {} }

    default:
      return state
  }
}
