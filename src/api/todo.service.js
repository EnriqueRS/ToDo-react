import sendGetRequest from './sendGetRequest'
import { sendPostRequestAuth } from './sendPostRequest'

export const getAll = async (token) => {
  const response = await sendGetRequest('todo', token)
  console.log('response', response)
  return response
}

export const postToDo = async (token, toDo) => {
  return await sendPostRequestAuth('todo', token, toDo)
}
