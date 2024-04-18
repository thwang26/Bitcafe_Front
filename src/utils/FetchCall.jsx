import axios, { AxiosError } from 'axios'
import { getCookie } from './Cookies'

const API_ACCESS_TOKEN = getCookie('accessToken')
// const API_BASE_URL = 'http://localhost:8080'

const axiosInstance = axios.create({
    // baseURL: API_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${API_ACCESS_TOKEN}`,
//   },
//   withCredentials: true,
})

export async function postFormData(url, data) {
  try {
    const response = await axiosInstance.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json;charset=UTF-8',
      },
    })
    return response
  } catch (error) {
    const axiosError = error
    throw axiosError
  }
}

export async function putFormData(url, data) {
  try {
    const response = await axiosInstance.put(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json;charset=UTF-8',
      },
    })
    return response
  } catch (error) {
    const axiosError = error
    throw axiosError
  }
}

export default axiosInstance
