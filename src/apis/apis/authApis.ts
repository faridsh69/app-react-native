import { AxiosResponse } from 'axios'

import { CORE_API_CLIENT, CORE_API_CLIENT_FORM_URL_ENCODED } from '../clients/apiClients'

export const getUserEmailAvailabilityApi = (data: { email: string }) =>
  CORE_API_CLIENT.get({
    endpoint: 'user-email/availability',
    data,
  })

export const postLoginApi = (data: { username: string; password: string }) =>
  CORE_API_CLIENT_FORM_URL_ENCODED.post({
    endpoint: 'auth/jwt/login',
    data,
  })

export const postRegisterApi = (data: {
  dob: string
  username: string
  email: string
  password: string
}) =>
  CORE_API_CLIENT_FORM_URL_ENCODED.post({
    endpoint: 'auth/register',
    data,
  })

export const getUserProfile = () =>
  CORE_API_CLIENT.get({
    endpoint: 'users/me',
  })

export const postUserLogout = () =>
  CORE_API_CLIENT.post({
    endpoint: 'auth/jwt/logout',
  })

export const postRefreshToken = (data: { username: string; password: string }) =>
  CORE_API_CLIENT.post({
    endpoint: 'auth/refresh/new',
    data,
  })

export const postUseRefreshToken = (data: {
  token: string
  email: string
}): Promise<AxiosResponse<{ access_token: string; refresh_token: string }>> =>
  CORE_API_CLIENT.post({
    endpoint: 'auth/refresh/use',
    data,
  })
