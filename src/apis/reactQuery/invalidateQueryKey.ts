import { InvalidateQueryEnum } from '../constants/api.constants'
import { QUERY_CLIENT } from './reactQuery.constants'

export const invalidateQueryKey = (queryArray: any, type = InvalidateQueryEnum.Exact) => {
  if (type === InvalidateQueryEnum.Exact) {
    QUERY_CLIENT.invalidateQueries({
      queryKey: queryArray,
    })
  }

  if (type === InvalidateQueryEnum.All) {
    QUERY_CLIENT.invalidateQueries({
      predicate: (cached: any) => {
        return cached.queryKey.includes(queryArray)
      },
      refetchType: 'inactive',
    })

    QUERY_CLIENT.invalidateQueries({
      predicate: (cached: any) => {
        return cached.queryKey.includes(queryArray)
      },
    })
  }
}
