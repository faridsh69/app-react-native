import { atom } from '@/core/lib/jotai'

type LocationAtomType = {
  country: string
  region: string
}

export const DEFAULT_LOCATION_MODAL = {
  country: '',
  region: '',
}

export const locationAtom = atom<LocationAtomType>(DEFAULT_LOCATION_MODAL)
