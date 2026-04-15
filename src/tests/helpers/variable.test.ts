import {
  isArray,
  isBoolean,
  isNull,
  isNumber,
  isObject,
  isObjectEmpty,
  isString,
  isUndefined,
} from '@/core/helpers/variables.helpers'
import { describe, expect, it } from 'vitest'

describe('typeGuards', () => {
  describe('isBoolean', () => {
    it('detects booleans', () => {
      expect(isBoolean(true)).toBe(true)
      expect(isBoolean(false)).toBe(true)
      expect(isBoolean('true')).toBe(false)
      expect(isBoolean(0)).toBe(false)
      expect(isBoolean(null)).toBe(false)
      expect(isBoolean(undefined)).toBe(false)
    })
  })

  describe('isString', () => {
    it('detects strings', () => {
      expect(isString('abc')).toBe(true)
      expect(isString(String('x'))).toBe(true)
      expect(isString(123)).toBe(false)
      expect(isString(['a'])).toBe(false)
      expect(isString(null)).toBe(false)
      expect(isString(undefined)).toBe(false)
    })
  })

  describe('isNumber', () => {
    it('detects finite numbers, not NaN', () => {
      expect(isNumber(0)).toBe(true)
      expect(isNumber(42)).toBe(true)
      expect(isNumber(-3.14)).toBe(true)
      expect(isNumber(Number('5'))).toBe(true)
      expect(isNumber(NaN)).toBe(false) // explicitly excluded
      expect(isNumber('123')).toBe(false)
      expect(isNumber(null)).toBe(false)
      expect(isNumber(undefined)).toBe(false)
    })
  })

  describe('isArray', () => {
    it('detects arrays', () => {
      expect(isArray<number>([1, 2, 3])).toBe(true)
      expect(isArray<string>(['a'])).toBe(true)
      expect(isArray([])).toBe(true)
      expect(isArray('not array')).toBe(false)
      expect(isArray({})).toBe(false)
      expect(isArray(null)).toBe(false)
    })
  })

  describe('isObject', () => {
    it('detects plain objects (non-null, non-array)', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ a: 1 })).toBe(true)
      expect(isObject(Object.create(null))).toBe(true)
      expect(isObject([])).toBe(false)
      expect(isObject(null)).toBe(false)
      expect(isObject('x')).toBe(false)
      expect(isObject(1)).toBe(false)
    })
  })

  describe('isObjectEmpty', () => {
    it('returns true for null/undefined/non-objects or empty objects', () => {
      expect(isObjectEmpty(null)).toBe(true)
      expect(isObjectEmpty(undefined)).toBe(true)
      expect(isObjectEmpty('')).toBe(true)
      expect(isObjectEmpty(0)).toBe(true)
      expect(isObjectEmpty([])).toBe(true) // not an object per your guard
      expect(isObjectEmpty({})).toBe(true)
    })

    it('returns false for non-empty plain objects', () => {
      expect(isObjectEmpty({ a: 1 })).toBe(false)
      expect(isObjectEmpty({ length: 0 })).toBe(false)
    })
  })

  describe('isNull', () => {
    it('detects null', () => {
      expect(isNull(null)).toBe(true)
      expect(isNull(undefined)).toBe(false)
      expect(isNull(0)).toBe(false)
      expect(isNull('')).toBe(false)
      expect(isNull({})).toBe(false)
    })
  })

  describe('isUndefined', () => {
    it('detects undefined', () => {
      expect(isUndefined(undefined)).toBe(true)
      expect(isUndefined(void 0)).toBe(true)
      expect(isUndefined(null)).toBe(false)
      expect(isUndefined(0)).toBe(false)
      expect(isUndefined('')).toBe(false)
    })
  })
})
