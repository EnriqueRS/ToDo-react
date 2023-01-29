
const sendGetRequest = (url, token) => {
  const port = `${process.env.REACT_APP_PORT_API === '80' ? '' : `:${process.env.REACT_APP_PORT_API}`}`
  return fetch(`${process.env.REACT_APP_URL_API}${port}/api/${process.env.REACT_APP_VERSION_API}/${url}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then((response) => response.json())
    .then((data) => {
      if (data.statusCode === 200 || data.statusCode === 201) {
        return data.data
      }
      return data
    })
}

export default sendGetRequest
