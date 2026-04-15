import type { UseQueryOptions } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'

type TypeListApiMethod = (filters?: any) => Promise<any>
type TypeSingleApiMethod = (id: string) => Promise<AxiosResponse<any, any>>
type TypeCreateApiMethod = (payload: any) => Promise<any>
type TypeUpdateApiMethod = (payload: any) => Promise<AxiosResponse<any>>
type TypeDeleteApiMethod = (payload: any) => Promise<AxiosResponse<void>>

export type QueryKeyApisType = {
  [key: string]: Partial<{
    listApi: TypeListApiMethod
    singleApi: TypeSingleApiMethod
    createApi: TypeCreateApiMethod
    updateApi: TypeUpdateApiMethod
    deleteApi: TypeDeleteApiMethod
  }>
}

export type TypeUseFetchProps = {
  queryKey: string
  filters?: any
  configs?: Partial<UseQueryOptions>
}

export type TypeUseFetchReturn<T> = {
  list: T
  isLoading: boolean
  error: any
  listQueryKey: any[]
}

export type TypePayload<T> = {
  data: Partial<T> & { id?: string }
  onSuccess?: (apiResponse: any) => void
  onError?: (apiError?: any) => void
}

export type TypePayloadDelete = {
  id: string | number
  onSuccess?: (apiRes: any) => void
  onError?: (error?: any) => void
}

export type TypeUseCrudProps = {
  queryKey: string
  modelId?: string
  filters?: any
  configs?: Partial<UseQueryOptions>
}

export type TypeUseCrudReturn<T> = {
  data: T[]
  error: any
  isFetching: boolean

  listQueryKey: any[]

  invalidateList: () => void
}
