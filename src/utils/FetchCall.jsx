import axios, { AxiosError } from 'axios'
import { getCookie } from './Cookies'

const API_ACCESS_TOKEN = getCookie('accessToken')

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNzE3NDk4NjI0LCJleHAiOjE3MTc1MDAwNjR9.MHxR2BQ3ZfOrFtou9rmGCNtkKzvTnD2AYRXaSlLiJSw`
    // Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
  withCredentials: true,
})

export const useAxiosInterceptors = (showSpinner, hideSpinner) => {
  // 요청 인터셉터
  axiosInstance.interceptors.request.use(
      config => {
          showSpinner()
          return config
      },
      error => {
          hideSpinner()
          return Promise.reject(error)
      }
  )

  // 응답 인터셉터
  axiosInstance.interceptors.response.use(
      response => {
          hideSpinner()
          return response
      },
      error => {
          hideSpinner()
          return Promise.reject(error)
      }
  )
}

export const checkLogin = () => {

}

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
