
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
  return fetch(`${process.env.REACT_APP_URL_API}${port}/api/${process.env.REACT_APP_VERSION_API}/${url}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => {
      if (data.statusCode === 200 || data.statusCode === 201) {
        return data.data
      }
    })
}

export {
  sendPostRequest,
  sendPostRequestAuth
}
