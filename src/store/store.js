import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers'

const preloadedState = {}
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
  reducer: authReducer,
  preloadedState
})

export default store
