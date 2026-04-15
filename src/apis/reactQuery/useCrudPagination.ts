import { useEffect } from 'react'
import { isArray } from '@/core/helpers/variables.helpers'

import { PER_PAGE } from '../constants/api.constants'
import { QUERY_CLIENT } from './reactQuery.constants'
import { useCrud } from './useCrud'

export const useCrudPagination = (
  apiCallingQueryKey: string, // e.g. QUERY_KEYS.discourse.reviews
  cachedListQueryArray: any, // the listQueryKey from useCrud that is e.g. [QUERY_KEYS.discourse.reviews, filters]
  page: number,
  perPage = PER_PAGE,
) => {
  const { data: paginatedList, isFetching: isLoadingPagination } = useCrud<any>({
    queryKey: apiCallingQueryKey,
    filters: { page, perPage },
    configs: { enabled: page !== 1 },
  })

  useEffect(() => {
    QUERY_CLIENT.setQueryData(cachedListQueryArray, (list: any[]) => {
      if (!list || !isArray(list)) return []

      return [...list, ...paginatedList]
    })
  }, [paginatedList, cachedListQueryArray])

  return {
    isLoadingPagination,
  }
}
