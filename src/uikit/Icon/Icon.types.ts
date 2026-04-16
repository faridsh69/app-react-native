import { IconsEnum, SizesEnum } from '@/ui/enums'
import { SymbolWeight } from 'expo-symbols'

export type IconProps = {
  icon: IconsEnum
  size?: SizesEnum
  color?: string
  style?: any
  weight?: SymbolWeight
  useSF?: boolean
  className?: string
}
