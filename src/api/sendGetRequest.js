import axios from 'axios'

const sendGetRequest = (url, token) => {
  const port = `${process.env.REACT_APP_PORT_API === '80' ? '' : `:${process.env.REACT_APP_PORT_API}`}`
  return axios.get(`${process.env.REACT_APP_URL_API}${port}/api/${process.env.REACT_APP_VERSION_API}/${url}`,
    {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      if (response.data.statusCode === 200) {
        return response.data.data
      }
    })
    .catch((error) => {
      throw error
    })
}

export default sendGetRequest
