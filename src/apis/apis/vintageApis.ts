import { CORE_API_CLIENT } from '../clients/apiClients'
import { PER_PAGE } from '../constants/api.constants'

const VINTAGES = 'vintages'
const VINTAGE = 'vintage'

export type VintagesSearchWithMetaApiPayload = {
  isOpen?: boolean
  page: number
  size: number
  histogram_steps: number
  query: string
  user_provided_text: boolean
  filters: {
    wine_colors: string[]
    wine_types: string[]
    price_max: number
  }
  sort_by: string
}

type VintagesSearchApiPayload = {
  page: number
  size: number
  histogramSteps: number
  userProvidedText: boolean
}

export const postVintagesSearchApi = (data: VintagesSearchApiPayload) =>
  CORE_API_CLIENT.post({
    endpoint: `${VINTAGES}/search`,
    data,
    options: {
      params: {
        page: data.page,
        size: data.size || PER_PAGE,
      },
    },
  })

export const getVintagesSlugApi = (wineSlug: string) =>
  CORE_API_CLIENT.get({
    endpoint: `${VINTAGE}/${wineSlug}`,
  })

type VintagesWineSlugFullDetailsApiFilters = {
  slug: string
  vintage_year?: string
}
export const getVintagesWineSlugFullDetailsApi = (data: VintagesWineSlugFullDetailsApiFilters) =>
  CORE_API_CLIENT.get({
    endpoint: `wine/${data.slug}/full-details`,
    data: {
      vintage_year: data.vintage_year,
    },
  })

type VintagesCompactVintagesApiFilters = {
  slugs: string[] // slugs.map(slug => `slugs=${slug}`).join('&')
}
export const getVintagesCompactVintagesApi = (data: VintagesCompactVintagesApiFilters) =>
  CORE_API_CLIENT.get({
    endpoint: `compact-vintages`,
    data: {
      slugs: data.slugs,
    },
  })
