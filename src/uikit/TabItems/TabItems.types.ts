import { ColorsEnumType, DirectionsEnum, IconsEnum } from '@/ui/enums'

import { OptionValueType } from '../../core/types/types'

export type TabItemValue = string | number

export type TabItemsOption = {
  value?: OptionValueType
  label?: string
  icon?: IconsEnum
  disabled?: boolean
  color?: ColorsEnumType
  badge?: number
}

export type TabItemsProps = {
  options?: TabItemsOption[]
  value?: OptionValueType
  onChange?: (value: OptionValueType) => void
  background?: boolean
  direction?: DirectionsEnum
  title?: string
}
