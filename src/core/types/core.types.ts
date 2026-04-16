export type TypeUser = {
  id: string
  email: string
  username: string
  avatar_link: string
}

export type TypeProduct = {
  id: string
  title: string
  vintage: number
  litr: number
  match: string
  src: string
  flag: string
  country: string
  rate: number
  rateCount: number
  rateCustomer: number
  region: string
  category: string
  price: number
  tags: string[]
}

export type TypeLocation = {
  country: string
  region: string
}

export type TypeBasket = {
  id: string
  items: any[]
  payment_collection: any
  item_total: number
  email: string
  shipping_methods: any[]
}

export type OptionValueType = string | number | null | undefined

export type WineType = {
  id: string
  label: string
  src?: string
  litr: number
  vintage: number
  price: number
  rate: number
  rateCount: number
  match: string
  country: string
  tags: string[]
}
