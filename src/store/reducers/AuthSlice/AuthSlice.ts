import { createSlice } from '@reduxjs/toolkit'
import { login } from './asyncThunks'

const initialState = {
  isAuth: false,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('accessToken', action.payload.accessToken)
        localStorage.setItem('refreshToken', action.payload.refreshToken)
        state.isAuth = true
      })
      .addCase(login.rejected, () => {
        console.log('REJECTED!')
      })
  },
})

export default AuthSlice.reducer
