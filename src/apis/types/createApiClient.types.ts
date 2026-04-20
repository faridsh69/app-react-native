import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { ContentTypesEnum } from '../constants/api.constants'

type TypeErrorValidation = { message: string; property: string }

export type TypeErrorHandlerInterceptor = (
  error: AxiosError<{ message: TypeErrorValidation[] }>,
) => Promise<AxiosError>

export type TypeAxiosRequestInterceptor = (
  config: InternalAxiosRequestConfig,
) => Promise<InternalAxiosRequestConfig>

export type TypeAxiosMethod = (params: {
  endpoint: string
  data?: any
  options?: any
}) => Promise<AxiosResponse>

export type CreateApiClientType = (params: {
  baseUrl?: string
  auth?: boolean
  location?: boolean
  contentType?: ContentTypesEnum
  xPublishApiKey?: boolean
}) => {
  get: TypeAxiosMethod
  post: TypeAxiosMethod
  put: TypeAxiosMethod
  patch: TypeAxiosMethod
  remove: TypeAxiosMethod
}
