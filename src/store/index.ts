import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './reducers/AuthSlice/AuthSlice'
import UserSlice from './reducers/UserSlice/UserSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
  },
})
export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
