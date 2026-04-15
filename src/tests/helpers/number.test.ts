import {
  calculateDiscount,
  formatCurrency,
  formatNumber,
  formatPercent,
  formatPrice,
  roundTo,
} from '@/core/helpers/number.helpers'
import { describe, expect, it } from 'vitest'

describe('numberUtils', () => {
  it('formats currency', () => {
    expect(formatCurrency(1234.56, 'USD', 'en-US')).toBe('$1,234.56')
    expect(formatCurrency(1234.56, 'EUR', 'de-DE')).toMatch('1.234,56 €')
  })

  it('formats plain numbers', () => {
    expect(formatNumber(1234567.89)).toBe('1,234,567.89')
  })

  it('formats percent', () => {
    expect(formatPercent(0.25)).toBe('25%')
    expect(formatPercent(0.1234, 'en-US', 2)).toBe('12.34%')
  })

  it('rounds numbers', () => {
    expect(roundTo(1.23456, 2)).toBe(1.23)
    expect(roundTo(1.235, 2)).toBe(1.24)
  })

  it('calculates discount', () => {
    expect(calculateDiscount(100, 75)).toBe(25)
    expect(calculateDiscount(200, 150)).toBe(25)
    expect(calculateDiscount(0, 50)).toBe(0)
  })

  it('parses price strings', () => {
    expect(formatPrice('$1,234.56')).toBe(1234.56)
    expect(formatPrice('€99,99')).toBe(9999) // German-style commas are tricky
    expect(formatPrice('abc')).toBeNaN()
  })
})
