import { ContentTypesEnum } from '@/apis/constants/api.constants'
import axios, { type AxiosInstance } from 'axios'

import { CreateApiClientType, TypeAxiosMethod } from '../types/createApiClient.types'
import { authInterceptor, errorHandlerInterceptor, locationInterceptor } from './axiosInterceptors'

export const createApiClient: CreateApiClientType = ({
  baseUrl = '',
  auth = true,
  location = true,
  contentType = ContentTypesEnum.Json,
}) => {
  const axiosInstance: AxiosInstance = axios.create({ baseURL: baseUrl })

  if (auth) {
    axiosInstance.interceptors.request.use(authInterceptor)
  }

  if (location) {
    axiosInstance.interceptors.request.use(locationInterceptor)
  }

  if (contentType) {
    axiosInstance.interceptors.request.use(async config => {
      config.headers['Content-Type'] = contentType

      return config
    })
  }

  axiosInstance.interceptors.response.use(undefined, errorHandlerInterceptor)

  const get: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.get(endpoint, {
      params: data,
      ...options,
    })

  const post: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.post(endpoint, data, options)

  const put: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.put(endpoint, data, options)

  const patch: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.patch(endpoint, data, options)

  const remove: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.delete(endpoint, {
      params: data,
      ...options,
    })

  return { get, post, put, patch, remove }
}
