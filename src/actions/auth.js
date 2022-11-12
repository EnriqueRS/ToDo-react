import jwtDecode from 'jwt-decode'
import {
  // REGISTER_SUCCESS,
  // REGISTER_FAIL,
  LOGIN_SUCCESS,
  // LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE
} from './types'

import AuthService from '../api/auth.service'

// export const register = (username, email, password) => (dispatch) => {
//   return AuthService.register(username, email, password).then(
//     (response) => {
//       dispatch({
//         type: REGISTER_SUCCESS
//       })

//       dispatch({
//         type: SET_MESSAGE,
//         payload: response.data.message
//       })

//       return Promise.resolve()
//     },
//     (error) => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()

//       dispatch({
//         type: REGISTER_FAIL
//       })

//       dispatch({
//         type: SET_MESSAGE,
//         payload: message
//       })

//       return Promise.reject(new Error('something bad happened'))
//     }
//   )
// }

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password)
    .then((data) => {
      localStorage.setItem('user', JSON.stringify(jwtDecode(data)))
      localStorage.setItem('token', data)
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: jwtDecode(data),
          token: data
        }
      })
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      dispatch({
        type: SET_MESSAGE,
        payload: message
      })
      throw new Error('something bad happened')

      // return dispatch => {
      //   dispatch({
      //     type: LOGIN_FAIL
      //   })

      //   dispatch({
      //     type: SET_MESSAGE,
      //     payload: message
      //   })
      // }
    })
}

export const logout = () => (dispatch) => {
  return dispatch({
    type: LOGOUT
  })
}
