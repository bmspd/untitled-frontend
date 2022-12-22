import { AxiosResponse } from 'axios'
import $api from '../http'

export type LoginRequestBody = {
  username: string
  password: string
}
export type GetInfoRequestBody = {
  userId: string
}
export default class AuthService {
  static async login(data: LoginRequestBody): Promise<AxiosResponse> {
    return $api.post<AxiosResponse>(`/auth/login`, data)
  }
  static async getInfo(userId: string): Promise<AxiosResponse> {
    return $api.get<AxiosResponse>(`/auth/get-info`, {
      params: { user_id: userId },
    })
  }
}
