import { useEffect } from 'react'
import { useCrudLocationIp } from '@/apis/useCruds/locationCruds'
import { getLsCountry, getLsRegion } from '@/core/helpers/ls.helpers'
import { useAtom } from '@/core/lib/jotai'

import { locationAtom } from '../contexts/locationAtom'

export const useLocationPortal = () => {
  const [, setLocationModal] = useAtom(locationAtom)

  const { data: ipLocation } = useCrudLocationIp()

  useEffect(() => {
    getLsCountry().then(country => {
      const finalCountry = country || ipLocation?.country || 'US'
      setLocationModal(p => ({ ...p, country: finalCountry }))
    })

    getLsRegion().then(region => {
      const finalRegion = region || ipLocation?.region || 'CA'
      setLocationModal(p => ({ ...p, region: finalRegion }))
    })
  }, [ipLocation])
}
