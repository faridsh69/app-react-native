import { ReactElement, ReactNode } from 'react'
import { VariantsEnum } from '@/ui/enums'

import { ButtonProps } from '../Button/Button.types'

export type ModalProps = {
  title?: string
  body?: ReactNode
  actions?: ReactElement
  background?: boolean
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  zIndex?: number
  overlayZIndex?: number
  bodyPadding?: boolean
  width?: string | number
  closeOnClickOutside?: boolean
  variant?: VariantsEnum
  snapPoints?: Array<string | number>
  enablePanDownToClose?: boolean
}

export type MainLayerProps = {
  title?: string
  body?: ReactNode
  actions: ButtonProps[]
  handleCloseModal: () => void
  bodyPadding?: boolean
  hideHeader?: boolean
  actionsCenter?: boolean
}
