import { useEffect, useState } from 'react'

import { APP_LS_KEY } from '../constants/ls.constants'
import { getLs, setLs } from '../helpers/ls.helpers'

export const usePersistState = <T>(lsKey: string, defaultValue: T, appLsKey = APP_LS_KEY): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(defaultValue)

  useEffect(() => {
    let isMounted = true

    const loadPersistedValue = async () => {
      const storedValue = await getLs(lsKey, defaultValue, appLsKey)
      if (isMounted) {
        setValue(storedValue)
      }
    }

    void loadPersistedValue()

    return () => {
      isMounted = false
    }
  }, [lsKey, defaultValue, appLsKey])

  useEffect(() => {
    void setLs(lsKey, value, appLsKey)
  }, [value, lsKey, appLsKey])

  return [value, setValue]
}
