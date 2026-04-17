import { CountriesEnum, IconsEnum, SizesEnum } from '../theme/themeEnums'

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
