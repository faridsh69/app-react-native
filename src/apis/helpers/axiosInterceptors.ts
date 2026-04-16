import { postUseRefreshToken } from '@/apis/apis/authApis'
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

import { TypeAxiosRequestInterceptor, TypeErrorHandlerInterceptor } from '../types/createApiClient.types'

const UNAUTHORIZED_CODE = 401

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

  const newTokens = await postUseRefreshToken({
    token: refreshToken,
    email,
  })

  setLsBearerToken(newTokens.data.access_token)
  setLsRefreshToken(newTokens.data.refresh_token)

  return newTokens
}

export const locationInterceptor: TypeAxiosRequestInterceptor = async config => {
  const country = getLsCountry()
  const region = getLsRegion()

  const data = JSON.stringify({
    market_country: country || 'US',
    market_region: region,
  })

  const signature = Buffer.from(data).toString('base64')

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

  if (error?.response?.status === UNAUTHORIZED_CODE && axiosConfig && axiosConfig.headers.Authorization) {
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
