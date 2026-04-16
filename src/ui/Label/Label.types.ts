import { ReactNode } from 'react'
import { TextStyle } from 'react-native'

import { ColorsEnumType, FontsEnumType, PlacementsEnumType } from '../theme/enums'

export type LabelProps = {
  label?: string | number | null | ReactNode
  font?: FontsEnumType
  disabled?: boolean
  linesCount?: number
  hasError?: boolean
  active?: boolean
  hint?: string
  zIndex?: number
  hintZIndex?: number
  mouseEnterDelay?: number
  forceTooltip?: boolean
  color?: ColorsEnumType
  textAlign?: TextStyle['textAlign']
  required?: boolean
  tooltipPlacement?: PlacementsEnumType
  onClick?: () => void
  cursorPointer?: boolean
}
