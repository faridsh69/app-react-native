import { APP_LS_KEY, LS_KEYS } from '../constants/ls.constants'
import { TypeBasket, TypeUser } from '../types/core.types'
import { isObjectEmpty, isUndefined } from './variables.helpers'

export const getLsAuthUser = (): TypeUser | null => {
  return getLs(LS_KEYS.auth.authUser, null)
}

export const setLsAuthUser = (authUser: TypeUser) => {
  setLs(LS_KEYS.auth.authUser, authUser)
}

export const removeLsAuthUser = () => {
  removeLs(LS_KEYS.auth.authUser)
}

export const getLsBearerToken = (): string => {
  return getLs(LS_KEYS.auth.bearerToken, '')
}

export const setLsBearerToken = (bearerToken: string) => {
  setLs(LS_KEYS.auth.bearerToken, bearerToken)
}

export const removeLsBearerToken = () => {
  removeLs(LS_KEYS.auth.bearerToken)
}
export const getLsRefreshToken = (): string => {
  return getLs(LS_KEYS.auth.refreshToken, '')
}

export const setLsRefreshToken = (refreshToken: string) => {
  setLs(LS_KEYS.auth.refreshToken, refreshToken)
}

export const removeLsRefreshToken = () => {
  removeLs(LS_KEYS.auth.refreshToken)
}

export const getLsCountry = (): string => {
  return getLs(LS_KEYS.location.country, '')
}

export const setLsCountry = (country: string) => {
  setLs(LS_KEYS.location.country, country)
}

export const getLsRegion = (): string => {
  return getLs(LS_KEYS.location.region, '')
}

export const setLsRegion = (region: string) => {
  setLs(LS_KEYS.location.region, region)
}

export const getLsMedusaAdminBearerToken = (): string => {
  return getLs(LS_KEYS.medusa.adminBearerToken, '')
}

export const setLsMedusaAdminBearerToken = (bearerToken: string) => {
  setLs(LS_KEYS.medusa.adminBearerToken, bearerToken)
}

export const getLsMedusaBaskets = (): TypeBasket[] => {
  return getLs(LS_KEYS.medusa.baskets, [])
}

export const setLsMedusaBaskets = (baskets: TypeBasket[]) => {
  setLs(LS_KEYS.medusa.baskets, baskets)
}

export const getLsMedusaRegion = (): string => {
  return getLs(LS_KEYS.medusa.region, '')
}

export const setLsMedusaRegion = (region: string) => {
  setLs(LS_KEYS.medusa.region, region)
}

export const getLs = <T>(lsKey: string, defaultValue: T, appLsKey = APP_LS_KEY): T => {
  try {
    const appLsJson = localStorage.getItem(appLsKey) || ''
    const appLsData = JSON.parse(appLsJson) || {}

    if (isObjectEmpty(appLsData) || isUndefined(appLsData[lsKey])) {
      return defaultValue
    }

    return appLsData[lsKey]
  } catch {
    return defaultValue
  }
}

export const setLs = (lsKey: string, value: any, appLsKey = APP_LS_KEY): void => {
  try {
    const appLsJson = localStorage.getItem(appLsKey) || '{}'
    const appLsData = JSON.parse(appLsJson) || {}
    const newAppLsData = { ...appLsData, [lsKey]: value }

    localStorage.setItem(appLsKey, JSON.stringify(newAppLsData))
  } catch {
    const appLsJson = JSON.stringify({ [lsKey]: value })

    localStorage.setItem(lsKey, appLsJson)
  }
}

export const removeLs = (lsKey: string, appLsKey = APP_LS_KEY): void => {
  try {
    const appLsJson = localStorage.getItem(appLsKey) || ''
    const appLsData = JSON.parse(appLsJson) || {}

    delete appLsData[lsKey]

    localStorage.setItem(appLsKey, JSON.stringify(appLsData))
  } catch {}
}
