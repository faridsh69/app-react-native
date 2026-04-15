import { useMemo } from 'react'
import { filtersAtomType } from '@/search/contexts/filtersAtom'

import { VintagesSearchWithMetaApiPayload } from '../apis/vintageApis'
import { QUERY_KEYS } from '../reactQuery/reactQuery.constants'
import { useCrud } from '../reactQuery/useCrud'

export const useCrudVintagesSearchWithMeta = (filters: filtersAtomType, configs?: any) => {
  const apiFilters = useMemo(() => {
    return {
      size: filters.perPage, // This is because api has a problem with number of size
      page: filters.page,
      query: filters.query,
      sort_by: filters.sort?.value,
      histogram_steps: 25,
      user_provided_text: false,
      configs,
      filters: {
        price_max: filters.priceTo,
        wine_colors: filters.colors,
        wine_types: ['Still'],
      },
    }
  }, [filters, configs])

  return useCrud<VintagesSearchWithMetaApiPayload>({
    queryKey: QUERY_KEYS.products.search,
    filters: apiFilters,
    configs,
  })
}
