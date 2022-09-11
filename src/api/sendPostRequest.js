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
  return axios.post(`${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/api/${process.env.REACT_APP_VERSION_API}/${url}`,
    JSON.stringify(payload),
    {
      headers
    })
    .then((response) => {
      if (response.data.statusCode === 200) {
        return response.data.data
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

export {
  sendPostRequest,
  sendPostRequestAuth
}
