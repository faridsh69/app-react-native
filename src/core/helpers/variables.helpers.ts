export const isBoolean = (variable: unknown): variable is boolean => typeof variable === 'boolean'

export const isString = (variable: unknown): variable is string => typeof variable === 'string'

export const isNumber = (variable: unknown): variable is number =>
  typeof variable === 'number' && !isNaN(variable)

export const isArray = <T>(variable: unknown): variable is T[] => Array.isArray(variable)

export const isObject = (variable: unknown): variable is Record<string, unknown> =>
  typeof variable === 'object' && variable !== null && !Array.isArray(variable)

export const isObjectEmpty = (object: unknown): boolean =>
  !object || !isObject(object) || !Object.keys(object).length

export const isNull = (variable: unknown): variable is null => variable === null

export const isUndefined = (variable: unknown): variable is undefined => variable === undefined
