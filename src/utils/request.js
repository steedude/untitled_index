import axios from 'axios'
import { useUserStore } from '@/stores'
import errorCode from '@/utils/errorCode'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 50000
})

axiosInstance.interceptors.request.use(
  (config) => {
    const { getToken } = useUserStore()
    const token = getToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject({ resultCode: 1000, message: JSON.stringify(error) })
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response) {
      if (error.response.data.message) {
        return Promise.reject(error.response.data)
      }
      return Promise.reject({
        ...error.response.data,
        message: errorCode[error.response.data.resultCode]
      })
    } else {
      return Promise.reject({ resultCode: 1000, message: JSON.stringify(error) })
    }
  }
)

export default axiosInstance
