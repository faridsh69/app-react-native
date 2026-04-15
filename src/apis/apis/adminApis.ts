import { ADMIN_API_CLIENT } from '../clients/apiClients'

export type TypeAdminAuthUserEmailpass = { email: string; password: string }

export const postAdminAuthUserEmailpassApi = (data: TypeAdminAuthUserEmailpass) =>
  ADMIN_API_CLIENT.post({
    endpoint: 'auth/user/emailpass',
    data,
  })

export const getAdminOrdersApi = () =>
  ADMIN_API_CLIENT.get({
    endpoint: 'admin/orders',
    data: {
      //   fields:
      //     'id%2Cstatus%2Ccreated_at%2Cemail%2Cdisplay_id%2Cpayment_status%2Cfulfillment_status%2Ctotal%2Ccurrency_code%2C%2Acustomer%2C%2Asales_channel',
      limit: 20,
      offset: 0,
      order: '-display_id',
    },
  })
