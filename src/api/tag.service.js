import sendGetRequest from './sendGetRequest'

export const getAllTags = (token) => {
  return sendGetRequest('tag', token)
}
