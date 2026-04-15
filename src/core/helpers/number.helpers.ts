export const formatCurrency = (value: number | string | null, currency: string, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value ? +value : 0)
}

export const formatNumber = (value: number, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale).format(value)
}

export const formatPercent = (value: number, locale: string = 'en-US', minimumFractionDigits: number = 0): string => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits,
  }).format(value)
}

export const roundTo = (value: number, decimals: number = 2): number => {
  const factor = 10 ** decimals

  return Math.round(value * factor) / factor
}

export const calculateDiscount = (originalPrice: number, discountedPrice: number): number => {
  if (originalPrice <= 0) return 0

  return roundTo(((originalPrice - discountedPrice) / originalPrice) * 100, 2)
}

export const formatPrice = (input: string): number => {
  const cleaned = input.replace(/[^\d.-]/g, '')

  return parseFloat(cleaned)
}
