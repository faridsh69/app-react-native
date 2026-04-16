import { CountriesEnum, IconsEnum, SizesEnum } from '@/ui/enums'

export type ChipProps = {
  onClose?: () => void
  label?: string
  size?: SizesEnum
  icon?: IconsEnum
  active?: boolean
  width?: string | number
  noHover?: boolean
  country?: CountriesEnum
}
