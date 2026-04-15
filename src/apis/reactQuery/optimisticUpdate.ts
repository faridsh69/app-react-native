import { isArray } from '@/core/helpers/variables.helpers'

import { QUERY_CLIENT } from './reactQuery.constants'

export const optimisticUpdateCreateCrud = (queryKey: string, filters: any, apiResponse: any) => {
  const createdModel = apiResponse.data

  QUERY_CLIENT.setQueryData([queryKey, filters], (list: any[]) => {
    if (list && isArray(list)) {
      if (createdModel) {
        return [createdModel, ...list]
      }

      return list
    }

    return [createdModel]
  })
}

export const optimisticUpdateInUpdateCrud = (
  queryKey: string,
  filters: any,
  payload: any,
  single: any,
  modelId: string,
) => {
  const { data } = payload

  QUERY_CLIENT.setQueryData([queryKey, filters], (list: any[]) => {
    if (!list || !isArray(list)) return []

    const updatedList = list.map((item: any) =>
      item.id !== data.id
        ? item
        : {
            ...item,
            ...data,
          },
    )

    return updatedList
  })

  if (single?.id === data?.id) {
    QUERY_CLIENT.setQueryData([queryKey, modelId], (single: any) => {
      return {
        ...single,
        ...data,
      }
    })
  }
}

export const optimisticUpdateInDeleteCrud = (queryKey: string, filters: any, payload: any) => {
  QUERY_CLIENT.setQueryData([queryKey, filters], (list: any[]) => {
    if (list) {
      return list.filter(item => item.id !== payload.id)
    }

    return []
  })
}
