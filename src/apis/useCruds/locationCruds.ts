import { QUERY_KEYS } from '../reactQuery/reactQuery.constants'
import { useCrud } from '../reactQuery/useCrud'

export const useCrudLocationIp = () =>
  useCrud<{ country: string; region: string }>({
    queryKey: QUERY_KEYS.location.ipLocation,
  })
