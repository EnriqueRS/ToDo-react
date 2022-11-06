import { sendPostRequest } from './sendPostRequest'

const login = (username, password) => {
  return sendPostRequest('login', { username, password })
}

export default {
  // register,
  login
}
