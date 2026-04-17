import { useEffect } from 'react'
import { getLsCountry, getLsRegion } from '@/core/helpers/ls.helpers'
import { useAtom } from '@/core/lib/jotai'

import { locationAtom } from '../contexts/locationAtom'

export const useLocation = () => {
  const [locationModal, setLocationModal] = useAtom(locationAtom)

  useEffect(() => {
    getLsCountry().then(country => setLocationModal(p => ({ ...p, country })))
    getLsRegion().then(region => setLocationModal(p => ({ ...p, region })))
  }, [setLocationModal])

  return {
    locationModal,
  }
}
