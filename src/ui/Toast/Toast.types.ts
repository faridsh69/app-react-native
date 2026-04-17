import { ColorsEnumType, IconsEnum } from '../theme/themeEnums'

export type ToastCardProps = {
  title?: string
  description?: string
  icon?: IconsEnum
  iconColor?: ColorsEnumType
  closeToast?: () => void
}

export type ShowToastOptions = {
  autoHide?: boolean
  visibilityTime?: number
}
