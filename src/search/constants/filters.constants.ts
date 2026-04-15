import { sortBysEnum } from './filters.enums'

export const DEFAULT_SORTING = sortBysEnum.Recommended

export const DEFAULT_PRICE_MIN = 1

export const DEFAULT_PRICE_MAX = 500

export const ACTIVE_FILTERS_MAXIMUM_SHOWN = 5

export const FILTERS_KEYS = {
  arrays: {
    wineColors: 'wine_colors',
    wineTypes: 'wine_types',
    countries: 'countries',
    regions: 'regions',
    grapes: 'grapes',
    foods: 'foods',
    merchants: 'merchants',
    dishes: 'dishes',
    flavors: 'flavors',
    tasteProfiles: 'taste_profiles',
    bottleVolumes: 'bottle_volumes',
  },
  numbers: {
    priceMin: 'price_min',
    priceMax: 'price_max',
    yearMin: 'year_min',
    yearMax: 'year_max',
  },
  booleans: {
    isNatural: 'is_natural',
    isBlended: 'is_blended',
  },
  page: 'page',
  size: 'size',
  sortBy: 'sort_by',
  query: 'query',
  smartSommSearchId: 'smart_somm_search_id',
}

export const PRODUCT_SORTS = [
  {
    label: 'Recommended',
    value: 'recommended',
  },
  {
    label: 'Top Rated',
    value: 'rating-desc',
  },
  {
    label: 'Most Popular',
    value: 'rating_count-desc',
  },
  {
    label: 'Price: High to Low',
    value: 'price-desc',
  },
  {
    label: 'Price: Low to High',
    value: 'price',
  },
]

export const FILTERS_COLORS = ['Red', 'White', 'Rose', 'Other']

export const YEAR_OPTIONS = Array.from({ length: 2024 - 2010 + 1 }, (_, i) => {
  const year = (2010 + i).toString()

  return { label: year, value: year }
})

export const VOLUME_OPTIONS = [
  {
    value: '375 ml',
    label: '375 ml',
  },
  {
    value: '500 ml',
    label: '500 ml',
  },
  {
    value: '750 ml',
    label: '750 ml',
  },
  {
    value: '1 L',
    label: '1 L',
  },
  {
    value: '1.5 L',
    label: '1.5 L',
  },
]
