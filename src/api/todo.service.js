import sendGetRequest from './sendGetRequest'
import { sendPostRequestAuth } from './sendPostRequest'

export const getAll = async (token) => {
  return await sendGetRequest('todo', token)
}

export const postToDo = async (token, toDo) => {
  return await sendPostRequestAuth('todo', token, toDo)
}
