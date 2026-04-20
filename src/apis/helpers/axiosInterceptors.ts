import {
  getLsAuthUser,
  getLsBearerToken,
  getLsCountry,
  getLsRefreshToken,
  getLsRegion,
  setLsBearerToken,
  setLsRefreshToken,
} from '@/core/helpers/ls.helpers'
import axios from 'axios'
import { encode } from 'base-64'

import {
  TypeAxiosRequestInterceptor,
  TypeErrorHandlerInterceptor,
} from '../types/createApiClient.types'

const UNAUTHORIZED_CODE = 401
const API_URL = process.env.EXPO_PUBLIC_API_URL || ''

const prepareToken = (token?: string) => (token ? `Bearer ${token}` : undefined)

const refreshTokens = async (axiosConfig: any) => {
  const refreshToken = await getLsRefreshToken()

  const auth = await getLsAuthUser()
  const email = auth?.email

  if (!refreshToken || !email) {
    return axios({
      ...axiosConfig,
      headers: { ...axiosConfig.headers, authorization: undefined },
    })
  }

  const newTokens = await axios.post<{ access_token: string; refresh_token: string }>(
    'auth/refresh/use',
    {
      token: refreshToken,
      email,
    },
    {
      baseURL: API_URL,
    },
  )

  setLsBearerToken(newTokens.data.access_token)
  setLsRefreshToken(newTokens.data.refresh_token)

  return newTokens
}

export const locationInterceptor: TypeAxiosRequestInterceptor = async config => {
  const country = await getLsCountry()
  const region = await getLsRegion()

  const data = JSON.stringify({
    market_country: country || 'US',
    market_region: region,
  })

  const signature = encode(data)

  config.headers['x-vinovoss-market-location'] = signature

  return config
}

export const authInterceptor: TypeAxiosRequestInterceptor = async config => {
  const token = await getLsBearerToken()

  if (token) {
    config.headers.Authorization = prepareToken(token)
    config.headers['x-medusa-access-token'] = prepareToken(token)
  }

  return config
}

export const errorHandlerInterceptor: TypeErrorHandlerInterceptor = async error => {
  const axiosConfig = error.config

  if (
    error?.response?.status === UNAUTHORIZED_CODE &&
    axiosConfig &&
    axiosConfig.headers.Authorization
  ) {
    const newTokens = await refreshTokens(axiosConfig)

    return axios({
      ...axiosConfig,
      headers: {
        ...axiosConfig.headers,
        authorization: prepareToken(newTokens.data.access_token),
      },
    })
  }

  return Promise.reject(error)
}
