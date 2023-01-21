import axios from 'axios'

const sendPostRequestAuth = (url, token, payload) => {
  const headers = {
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
  return sendPost(url, payload, headers)
}

const sendPostRequest = (url, payload) => {
  const headers = {
    'content-type': 'application/json'
  }
  return sendPost(url, payload, headers)
}

function sendPost (url, payload, headers) {
  const port = `${process.env.REACT_APP_PORT_API === '80' ? '' : `:${process.env.REACT_APP_PORT_API}`}`
  return axios.post(`${process.env.REACT_APP_URL_API}${port}/api/${process.env.REACT_APP_VERSION_API}/${url}`,
    JSON.stringify(payload),
    {
      headers
    })
    .then((response) => {
      if (response.data.statusCode === 200 || response.data.statusCode === 201) {
        return response.data.data
      }
    })
    .catch((error) => {
      throw new Error(error.response.data.data)
    })
}

export {
  sendPostRequest,
  sendPostRequestAuth
}
