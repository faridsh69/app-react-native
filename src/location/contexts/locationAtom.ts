import { atom } from '@/core/lib/jotai'

export const DEFAULT_LOCATION_MODAL = {
  country: '',
  region: '',
}

export const locationAtom = atom(DEFAULT_LOCATION_MODAL)
