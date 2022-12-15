import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './reducers/AuthSlice/AuthSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
})
export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
