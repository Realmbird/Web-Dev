import { configureStore } from '@reduxjs/toolkit'
import statusReducer from './status.js'
export const store = configureStore({
  reducer: {
    status: statusReducer,
  },
})