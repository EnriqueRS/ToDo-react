import { SET_MESSAGE, CLEAR_MESSAGE } from './types'

export const setMessage = (message, kind) => ({
  type: SET_MESSAGE,
  payload: {
    text: message,
    kind
  }
})

export const clearMessage = () => ({
  type: CLEAR_MESSAGE
})
