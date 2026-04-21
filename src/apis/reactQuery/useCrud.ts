import { useEffect } from 'react'
import { handleClientExceptions } from '@/core/helpers/clientExceptions.helper'
import { useMutation, useQuery } from '@tanstack/react-query'

import { TypePayload, TypeUseCrudProps, TypeUseCrudReturn } from '../types/reactQuery.types'
import { invalidateQueryKey } from './invalidateQueryKey'
import { optimisticUpdateCreateCrud } from './optimisticUpdate'
import { QUERY_CLIENT } from './reactQuery.constants'
import { getApiMapping } from './reactQuery.helpers'

export const useCrud = <T>({
  queryKey,
  filters = {},
  configs = {},
}: TypeUseCrudProps): TypeUseCrudReturn<T> => {
  const { listApi, createApi } = getApiMapping(queryKey)

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

  const createMutation = useMutation({
    mutationFn: (payload: TypePayload<T>) => createApi(payload.data),
    onSuccess: (apiResponse: any, payload: TypePayload<T>) => {
      optimisticUpdateCreateCrud(queryKey, filters, apiResponse)

      payload.onSuccess?.(apiResponse?.data)
    },
    onError: (error: any, payload: TypePayload<T>) => {
      payload.onError?.(error)
      handleClientExceptions(error, 'Create Api: ' + queryKey)
    },
  })

  return {
    data: data as T,
    isFetching,
    error,
    createMutation,
    listQueryKey: [queryKey, filters],
    invalidateList,
  }
}
