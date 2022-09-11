import axios from 'axios'

const sendGetRequest = (url, token) => {
  return axios.get(`${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/api/${process.env.REACT_APP_VERSION_API}/${url}`,
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
      console.log(error)
    })
}

export default sendGetRequest
