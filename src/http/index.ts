import axios from 'axios'

const $api = axios.create({
  baseURL: 'http://localhost:3000',
})
$api.defaults.withCredentials = true
$api.interceptors.request.use((config) => {
  /*eslint-disable-next-line*/
  config.headers!.Authorization = `Bearer ${localStorage.getItem(
    'accessToken'
  )}`
  return config
})

$api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.response.status === 401) {
      const apiResponse = await axios.get(
        'http://localhost:3000/auth/refresh',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
          },
        }
      )

      localStorage.setItem('accessToken', apiResponse.data.accessToken)
      localStorage.setItem('refreshToken', apiResponse.data.refreshToken)
      error.config.headers[
        'Authorization'
      ] = `Bearer ${apiResponse.data.accessToken}`
      return axios(error.config)
    } else return Promise.reject(error)
  }
)

export default $api
