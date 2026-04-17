import { SymbolWeight } from 'expo-symbols'

import { IconsEnum, SizesEnum } from '../theme/themeEnums'

export type IconProps = {
  icon: IconsEnum
  size?: SizesEnum
  color?: string
  style?: any
  weight?: SymbolWeight
  useSF?: boolean
  className?: string
}
