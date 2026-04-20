import { ContentTypesEnum } from '../constants/api.constants'
import { createApiClient } from '../helpers/axiosClientCreator'

const API_URL = process.env.EXPO_PUBLIC_API_URL || ''
const DISCOURSE_API_URL = process.env.EXPO_PUBLIC_DISCOURSE_API_URL || ''
const AUTO_SUGGEST_API_URL = process.env.EXPO_PUBLIC_AUTO_SUGGEST_API_URL || ''
const ADMIN_API_URL = process.env.EXPO_PUBLIC_ADMIN_API_URL || ''

export const CORE_API_CLIENT = createApiClient({
  baseUrl: API_URL,
})

export const CORE_API_CLIENT_FORM_URL_ENCODED = createApiClient({
  baseUrl: API_URL,
  contentType: ContentTypesEnum.FormUrlEncoded,
})

export const DISCOURSE_API_CLIENT = createApiClient({
  baseUrl: DISCOURSE_API_URL,
})

export const AUTO_SUGGEST_API_CLIENT = createApiClient({
  baseUrl: AUTO_SUGGEST_API_URL,
})

export const ADMIN_API_CLIENT = createApiClient({
  baseUrl: ADMIN_API_URL,
})
