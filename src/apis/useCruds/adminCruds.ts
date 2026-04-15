import { TypeAdminAuthUserEmailpass } from '../apis/adminApis'
import { QUERY_KEYS } from '../reactQuery/reactQuery.constants'
import { useCrud } from '../reactQuery/useCrud'

export const useCrudAdminAuthUserEmailpass = () =>
  useCrud<TypeAdminAuthUserEmailpass>({
    queryKey: QUERY_KEYS.admin.authUserEmailpass,
  })

export const useCrudAdminOrders = () =>
  useCrud<any>({
    queryKey: QUERY_KEYS.admin.orders,
  })
