import { CORE_API_CLIENT } from '../clients/apiClients'

export const getIpLocationApi = () =>
  CORE_API_CLIENT.get({
    endpoint: 'location/ip-address',
  })
