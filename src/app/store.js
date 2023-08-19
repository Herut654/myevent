import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import recommendReducer from '../features/recommend/recommendSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recommends: recommendReducer,
  },
})
