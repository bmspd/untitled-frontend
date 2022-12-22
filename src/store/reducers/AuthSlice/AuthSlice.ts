import { createSlice } from '@reduxjs/toolkit'
import { getInfo, login } from './asyncThunks'

const initialState = {
  isAuth: false,
  isCheckedGetInfo: false,
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
        localStorage.setItem('userId', action.payload.user_id)
        state.isAuth = true
      })
      .addCase(login.rejected, () => {
        console.log('REJECTED!')
      })
      .addCase(getInfo.fulfilled, (state) => {
        state.isAuth = true
        state.isCheckedGetInfo = true
      })
      .addCase(getInfo.rejected, (state) => {
        state.isCheckedGetInfo = true
        localStorage.removeItem('userId')
      })
  },
})

export default AuthSlice.reducer
