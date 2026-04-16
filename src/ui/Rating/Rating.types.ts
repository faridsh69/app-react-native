import { SizesEnum } from '../theme/enums'

export type RatingProps = {
  value?: number
  onChange?: (rating: number) => void
  label?: string
  size?: SizesEnum
  disabled?: boolean
  hasError?: boolean
  required?: boolean
  hint?: string
  noHover?: boolean
}

export type StarSvgProps = {
  size?: SizesEnum
  fill?: boolean
  disabled?: boolean
  preview?: boolean
}
