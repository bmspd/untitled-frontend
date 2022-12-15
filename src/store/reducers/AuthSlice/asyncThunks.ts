import { createAsyncThunk } from '@reduxjs/toolkit'
import AuthService, { LoginRequestBody } from '../../../services/AuthService'

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginRequestBody) => {
    const response = await AuthService.login(data)
    return response.data
  }
)
