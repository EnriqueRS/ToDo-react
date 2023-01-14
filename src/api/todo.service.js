import sendGetRequest from './sendGetRequest'
import { sendPostRequestAuth } from './sendPostRequest'

const getAll = (token) => {
  return sendGetRequest('todo', token)
}

const postToDo = (token, toDo) => {
  return sendPostRequestAuth('todo', token, toDo)
}

export {
  getAll,
  postToDo
}
