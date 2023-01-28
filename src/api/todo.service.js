import sendGetRequest from './sendGetRequest'
import { sendPostRequestAuth } from './sendPostRequest'

export const getAll = (token) => {
  return sendGetRequest('todo', token)
}

export const postToDo = async (token, toDo) => {
  return await sendPostRequestAuth('todo', token, toDo)
}
