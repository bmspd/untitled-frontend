import { createAsyncThunk } from '@reduxjs/toolkit'
import UserService from '../../../services/UserService'

export const fetchAllUsers = createAsyncThunk(
  'user/fetchAllUsers',
  async () => {
    const response = await UserService.getAllUsers()
    return response.data
  }
)
