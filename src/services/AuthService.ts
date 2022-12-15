import { AxiosResponse } from 'axios'
import $api from '../http'

export type LoginRequestBody = {
  username: string
  password: string
}

export default class AuthService {
  static async login(data: LoginRequestBody): Promise<AxiosResponse> {
    return $api.post<AxiosResponse>(`/auth/login`, data)
  }
}
