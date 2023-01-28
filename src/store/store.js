import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers'

const preloadedState = {
  auth: {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user'))
  }
}
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
  reducer: authReducer,
  preloadedState
})

export default store
