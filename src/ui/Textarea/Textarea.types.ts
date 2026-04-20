import type { StyleProp, TextInputProps, TextStyle } from 'react-native'

import { TextareaSizes } from './Textarea.enums'

export interface TextareaProps extends Omit<TextInputProps, 'onChange'> {
  name: string
  value?: string
  onChange?: (text: string) => void
  onBlur?: () => void

  label?: string
  disabled?: boolean
  size?: TextareaSizes
  required?: boolean
  hasError?: boolean
  hint?: string
  hintZIndex?: number
  min?: number
  max?: number
  width?: any
  placeholder?: string
  isResizable?: boolean
  errorText?: string
  numberOfLines?: number
  style?: StyleProp<TextStyle>
}

export type CharacterCounterProps = {
  valueLength?: number
  min?: number
  max?: number
  invalidLength?: boolean
}
