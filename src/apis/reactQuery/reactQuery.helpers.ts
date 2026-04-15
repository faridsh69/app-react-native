import { QUERY_KEY_APIS } from './reactQuery.constants'

export const emptyPromise = (): Promise<any> => {
  return new Promise(res => {
    res({ data: {} })
  })
}

export const getApiMapping = (queryKey: string) => {
  const {
    listApi = emptyPromise,
    singleApi = emptyPromise,
    createApi = emptyPromise,
    updateApi = emptyPromise,
    deleteApi = emptyPromise,
  } = QUERY_KEY_APIS[queryKey]

  return {
    listApi,
    singleApi,
    createApi,
    updateApi,
    deleteApi,
  }
}
