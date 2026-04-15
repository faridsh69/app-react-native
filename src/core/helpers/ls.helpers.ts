import AsyncStorage from '@react-native-async-storage/async-storage'

import { APP_LS_KEY, LS_KEYS } from '../constants/ls.constants'
import { TypeBasket, TypeUser } from '../types/core.types'
import { isObjectEmpty, isUndefined } from './variables.helpers'

const isClient = typeof window !== 'undefined'

export const getLsAuthUser = async (): Promise<TypeUser | null> => {
  return getLs(LS_KEYS.auth.authUser, null)
}

export const setLsAuthUser = async (authUser: TypeUser): Promise<void> => {
  await setLs(LS_KEYS.auth.authUser, authUser)
}

export const removeLsAuthUser = async (): Promise<void> => {
  await removeLs(LS_KEYS.auth.authUser)
}

export const getLsBearerToken = async (): Promise<string> => {
  return getLs(LS_KEYS.auth.bearerToken, '')
}

export const setLsBearerToken = async (bearerToken: string): Promise<void> => {
  await setLs(LS_KEYS.auth.bearerToken, bearerToken)
}

export const removeLsBearerToken = async (): Promise<void> => {
  await removeLs(LS_KEYS.auth.bearerToken)
}

export const getLsRefreshToken = async (): Promise<string> => {
  return getLs(LS_KEYS.auth.refreshToken, '')
}

export const setLsRefreshToken = async (refreshToken: string): Promise<void> => {
  await setLs(LS_KEYS.auth.refreshToken, refreshToken)
}

export const removeLsRefreshToken = async (): Promise<void> => {
  await removeLs(LS_KEYS.auth.refreshToken)
}

export const getLsCountry = async (): Promise<string> => {
  return getLs(LS_KEYS.location.country, '')
}

export const setLsCountry = async (country: string): Promise<void> => {
  await setLs(LS_KEYS.location.country, country)
}

export const getLsRegion = async (): Promise<string> => {
  return getLs(LS_KEYS.location.region, '')
}

export const setLsRegion = async (region: string): Promise<void> => {
  await setLs(LS_KEYS.location.region, region)
}

export const getLsMedusaAdminBearerToken = async (): Promise<string> => {
  return getLs(LS_KEYS.medusa.adminBearerToken, '')
}

export const setLsMedusaAdminBearerToken = async (bearerToken: string): Promise<void> => {
  await setLs(LS_KEYS.medusa.adminBearerToken, bearerToken)
}

export const getLsMedusaBaskets = async (): Promise<TypeBasket[]> => {
  return getLs(LS_KEYS.medusa.baskets, [])
}

export const setLsMedusaBaskets = async (baskets: TypeBasket[]): Promise<void> => {
  await setLs(LS_KEYS.medusa.baskets, baskets)
}

export const getLsMedusaRegion = async (): Promise<string> => {
  return getLs(LS_KEYS.medusa.region, '')
}

export const setLsMedusaRegion = async (region: string): Promise<void> => {
  await setLs(LS_KEYS.medusa.region, region)
}

export const getLs = async <T>(lsKey: string, defaultValue: T, appLsKey = APP_LS_KEY): Promise<T> => {
  if (!isClient) {
    return defaultValue
  }

  try {
    const appLsJson = (await AsyncStorage.getItem(appLsKey)) || ''
    const appLsData = JSON.parse(appLsJson) || {}

    if (isObjectEmpty(appLsData) || isUndefined(appLsData[lsKey])) {
      return defaultValue
    }

    return appLsData[lsKey]
  } catch {
    return defaultValue
  }
}

export const setLs = async (lsKey: string, value: any, appLsKey = APP_LS_KEY): Promise<void> => {
  if (!isClient) {
    return
  }

  try {
    const appLsJson = (await AsyncStorage.getItem(appLsKey)) || '{}'
    const appLsData = JSON.parse(appLsJson) || {}
    const newAppLsData = { ...appLsData, [lsKey]: value }

    await AsyncStorage.setItem(appLsKey, JSON.stringify(newAppLsData))
  } catch {
    const appLsJson = JSON.stringify({ [lsKey]: value })

    await AsyncStorage.setItem(lsKey, appLsJson)
  }
}

export const removeLs = async (lsKey: string, appLsKey = APP_LS_KEY): Promise<void> => {
  if (!isClient) {
    return
  }

  try {
    const appLsJson = (await AsyncStorage.getItem(appLsKey)) || ''
    const appLsData = JSON.parse(appLsJson) || {}

    delete appLsData[lsKey]

    await AsyncStorage.setItem(appLsKey, JSON.stringify(appLsData))
  } catch {}
}
