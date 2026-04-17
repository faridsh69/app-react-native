import { PER_PAGE } from '@/apis/constants/api.constants'
import { atom } from '@/core/lib/jotai'

import { FILTERS_COLORS, PRODUCT_SORTS } from '../constants/filters.constants'

export type filtersAtomType = {
  page: number
  perPage: number
  query: string
  priceFrom: number
  priceTo: number
  colors: string[]
  types: string[]
  countries: string[]
  grapes: string[]
  foodPairings: string[]
  dishes: string[]
  tasteFlavors: string[]
  tasteProfiles: string[]
  regions: string[]
  natural: boolean
  singleVariarity: boolean
  multipleVariety: boolean
  vintageFrom?: number
  vintageTo?: number
  volums: string[]
  isOpen: boolean
  sort: { label: string; value: string }
}

export const DEFAULT_FILTERS: filtersAtomType = {
  // merchants: [],
  isOpen: false,
  page: 1,
  perPage: PER_PAGE,
  query: 'wine',
  priceFrom: 2,
  priceTo: 200,
  natural: false,
  countries: ['United States', 'France', 'Italy', 'Spain', 'Australia'],
  regions: [],
  grapes: [],
  singleVariarity: true,
  multipleVariety: true,
  foodPairings: ['pork', 'beef'],
  sort: PRODUCT_SORTS[0],
  colors: [FILTERS_COLORS[0]],
  types: ['still'],
  dishes: ['Mushroom Risotto'],
  tasteFlavors: [],
  tasteProfiles: [],
  vintageFrom: undefined,
  vintageTo: undefined,
  volums: ['750ml'],
}

export const filtersAtom = atom<filtersAtomType>(DEFAULT_FILTERS)
