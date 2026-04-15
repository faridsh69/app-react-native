import { APP_LS_KEY } from '@/utils/localstorage/constants/localstorage.constants'
import { getLs, removeLs, setLs } from '@/utils/localstorage/helpers/localstorage.helpers'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('localstorage.helpers', () => {
  beforeEach(() => {
    // reset jsdom localStorage
    localStorage.clear()
    vi.restoreAllMocks()
  })

  describe('getLs', () => {
    it('returns default when appLsKey is missing', () => {
      expect(getLs('theme', 'light')).toBe('light')
    })

    it('returns value from stored object when present', () => {
      localStorage.setItem(APP_LS_KEY, JSON.stringify({ theme: 'dark' }))
      expect(getLs('theme', 'light')).toBe('dark')
    })

    it('returns default when key is undefined in stored object', () => {
      localStorage.setItem(APP_LS_KEY, JSON.stringify({}))
      expect(getLs('theme', 'light')).toBe('light')
    })

    it('returns default when stored JSON is malformed', () => {
      localStorage.setItem(APP_LS_KEY, '{not: "json"') // malformed
      expect(getLs('theme', 'light')).toBe('light')
    })

    it('supports custom appLsKey', () => {
      localStorage.setItem('MY_APP', JSON.stringify({ lang: 'de' }))
      expect(getLs('lang', 'en', 'MY_APP')).toBe('de')
    })
  })

  describe('setLs', () => {
    it('creates new APP_LS_KEY object when none exists', () => {
      setLs('theme', 'dark')
      const stored = JSON.parse(localStorage.getItem(APP_LS_KEY)!)
      expect(stored).toEqual({ theme: 'dark' })
    })

    it('merges into existing APP_LS_KEY object', () => {
      localStorage.setItem(APP_LS_KEY, JSON.stringify({ theme: 'light' }))
      setLs('lang', 'en')
      const stored = JSON.parse(localStorage.getItem(APP_LS_KEY)!)
      expect(stored).toEqual({ theme: 'light', lang: 'en' })
    })

    it('uses custom appLsKey', () => {
      setLs('color', 'blue', 'MY_APP')
      const stored = JSON.parse(localStorage.getItem('MY_APP')!)
      expect(stored).toEqual({ color: 'blue' })
    })

    it('falls back to writing under lsKey when JSON parse throws', () => {
      // make the existing value malformed to trigger the catch branch
      localStorage.setItem(APP_LS_KEY, '<<bad json>>')
      setLs('theme', 'dark') // catch block writes to key = lsKey
      const fallback = JSON.parse(localStorage.getItem('theme')!)
      expect(fallback).toEqual({ theme: 'dark' })
      // APP_LS_KEY should remain the malformed string
      expect(localStorage.getItem(APP_LS_KEY)).toBe('<<bad json>>')
    })
  })

  describe('removeLs', () => {
    it('removes a key from the APP_LS_KEY object and persists', () => {
      localStorage.setItem(APP_LS_KEY, JSON.stringify({ a: 1, b: 2 }))
      removeLs('a')
      const stored = JSON.parse(localStorage.getItem(APP_LS_KEY)!)
      expect(stored).toEqual({ b: 2 })
    })

    it('no-ops gracefully when APP_LS_KEY is missing', () => {
      removeLs('x')
      expect(localStorage.getItem(APP_LS_KEY)).toBeNull()
    })

    it('no-ops gracefully when stored JSON is malformed', () => {
      localStorage.setItem(APP_LS_KEY, 'not-json')
      removeLs('x') // catch {} should swallow the error
      // nothing should change
      expect(localStorage.getItem(APP_LS_KEY)).toBe('not-json')
    })
  })
})
