import { APP_LS_KEY } from '@/core/constants/ls.constants'
import { getLs, removeLs, setLs } from '@/core/helpers/ls.helpers'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('localstorage.helpers', () => {
  beforeEach(() => {
    // reset jsdom localStorage
    localStorage.clear()
    vi.restoreAllMocks()
  })

  describe('getLs', () => {
    it('returns default when appLsKey is missing', async () => {
      await expect(getLs('theme', 'light')).resolves.toBe('light')
    })

    it('returns value from stored object when present', async () => {
      localStorage.setItem(APP_LS_KEY, JSON.stringify({ theme: 'dark' }))
      await expect(getLs('theme', 'light')).resolves.toBe('dark')
    })

    it('returns default when key is undefined in stored object', async () => {
      localStorage.setItem(APP_LS_KEY, JSON.stringify({}))
      await expect(getLs('theme', 'light')).resolves.toBe('light')
    })

    it('returns default when stored JSON is malformed', async () => {
      localStorage.setItem(APP_LS_KEY, '{not: "json"') // malformed
      await expect(getLs('theme', 'light')).resolves.toBe('light')
    })

    it('supports custom appLsKey', async () => {
      localStorage.setItem('MY_APP', JSON.stringify({ lang: 'de' }))
      await expect(getLs('lang', 'en', 'MY_APP')).resolves.toBe('de')
    })
  })

  describe('setLs', () => {
    it('creates new APP_LS_KEY object when none exists', async () => {
      await setLs('theme', 'dark')
      const stored = JSON.parse(localStorage.getItem(APP_LS_KEY)!)
      expect(stored).toEqual({ theme: 'dark' })
    })

    it('merges into existing APP_LS_KEY object', async () => {
      localStorage.setItem(APP_LS_KEY, JSON.stringify({ theme: 'light' }))
      await setLs('lang', 'en')
      const stored = JSON.parse(localStorage.getItem(APP_LS_KEY)!)
      expect(stored).toEqual({ theme: 'light', lang: 'en' })
    })

    it('uses custom appLsKey', async () => {
      await setLs('color', 'blue', 'MY_APP')
      const stored = JSON.parse(localStorage.getItem('MY_APP')!)
      expect(stored).toEqual({ color: 'blue' })
    })

    it('falls back to writing under lsKey when JSON parse throws', async () => {
      // make the existing value malformed to trigger the catch branch
      localStorage.setItem(APP_LS_KEY, '<<bad json>>')
      await setLs('theme', 'dark') // catch block writes to key = lsKey
      const fallback = JSON.parse(localStorage.getItem('theme')!)
      expect(fallback).toEqual({ theme: 'dark' })
      // APP_LS_KEY should remain the malformed string
      expect(localStorage.getItem(APP_LS_KEY)).toBe('<<bad json>>')
    })
  })

  describe('removeLs', () => {
    it('removes a key from the APP_LS_KEY object and persists', async () => {
      localStorage.setItem(APP_LS_KEY, JSON.stringify({ a: 1, b: 2 }))
      await removeLs('a')
      const stored = JSON.parse(localStorage.getItem(APP_LS_KEY)!)
      expect(stored).toEqual({ b: 2 })
    })

    it('no-ops gracefully when APP_LS_KEY is missing', async () => {
      await removeLs('x')
      expect(localStorage.getItem(APP_LS_KEY)).toBeNull()
    })

    it('no-ops gracefully when stored JSON is malformed', async () => {
      localStorage.setItem(APP_LS_KEY, 'not-json')
      await removeLs('x') // catch {} should swallow the error
      // nothing should change
      expect(localStorage.getItem(APP_LS_KEY)).toBe('not-json')
    })
  })
})
