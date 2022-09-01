import axios from 'axios';

const sendPostRequest = (url, payload) => {
    return axios.post(`${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/api/${process.env.REACT_APP_VERSION_API}/${url}`,
    JSON.stringify(payload),
    {
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((response) => {
      if (response.data.statusCode === 200) {
        return response.data.data;
      }
    })
    .catch((error) => {
      console.log(error);
    })
  };
  
  export default sendPostRequest;