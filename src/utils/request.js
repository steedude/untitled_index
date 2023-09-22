import axios from 'axios'
import { useUserStore } from '@/stores'

const baseURL = import.meta.env.VITE_API_URL
const axiosInstance = axios.create({ baseURL })

axiosInstance.interceptors.request.use(
  (config) => {
    const { getToken } = useUserStore()
    const token = getToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
