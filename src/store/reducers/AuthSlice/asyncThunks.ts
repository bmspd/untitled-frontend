import { createAsyncThunk } from '@reduxjs/toolkit'
import AuthService, { LoginRequestBody } from '../../../services/AuthService'
import { isNull } from 'lodash'
export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginRequestBody) => {
    const response = await AuthService.login(data)
    return response.data
  }
)

export const getInfo = createAsyncThunk(
  'auth/get-info',
  async (userId: string | null) => {
    console.log(userId)
    if (isNull(userId)) throw new Error()
    const response = await AuthService.getInfo(userId ?? '')
    return response.data
  }
)
