import { useEffect } from 'react'
import { handleClientExceptions } from '@/core/helpers/clientExceptions.helper'
import { useQuery } from '@tanstack/react-query'

import { TypeUseCrudProps, TypeUseCrudReturn } from '../types/reactQuery.types'
import { invalidateQueryKey } from './invalidateQueryKey'
import { QUERY_CLIENT } from './reactQuery.constants'
import { getApiMapping } from './reactQuery.helpers'

export const useCrud = <T>({
  queryKey,
  filters = {},
  configs = {},
}: TypeUseCrudProps): TypeUseCrudReturn<T> => {
  const { listApi } = getApiMapping(queryKey)

  const { data, error, isFetching } = useQuery({
    queryKey: [queryKey, filters],
    queryFn: async () => {
      const response = await listApi?.(filters)

      const apiResponse = response?.data

      QUERY_CLIENT.setQueryData([queryKey], apiResponse)

      return apiResponse as T
    },
    placeholderData: [],
    enabled: configs.enabled ? configs.enabled : !!listApi,
    ...configs,
  })

  useEffect(() => {
    if (error) {
      handleClientExceptions(error, 'Fetching list Api: ' + queryKey)
    }
  }, [error, queryKey])

  const invalidateList = () => {
    invalidateQueryKey([queryKey, filters])
  }

  return {
    data: data as T,
    isFetching,
    error,
    listQueryKey: [queryKey, filters],
    invalidateList,
  }
}
