import { createSlice } from '@reduxjs/toolkit'
import { fetchAllUsers } from './asyncThunks'

type UserState = {
  // eslint-disable-next-line
  users: null | Array<any>
}

const initialState: UserState = {
  users: null,
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
  },
})

export default UserSlice.reducer
