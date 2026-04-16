import { ColorsEnumType, FontsEnumType, PlacementsEnumType } from '@/ui/enums'
import { TextStyle } from 'react-native'

export type LabelProps = {
  label?: string | number | null
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
