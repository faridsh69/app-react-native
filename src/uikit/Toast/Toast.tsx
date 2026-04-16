import React, { ReactElement } from 'react'
import { ColorsEnum, IconsEnum } from '@/ui/enums'
import Toast from 'react-native-toast-message'

import { ShowToastOptions, ToastCardProps } from './Toast.types'
import { ToastCard } from './ToastCard'

const showToast = (
  type: keyof typeof toastConfig,
  element: ReactElement<ToastCardProps>,
  options: ShowToastOptions = {},
) => {
  const props = element?.props

  Toast.show({
    type,
    props: { ...props, closeToast: props.closeToast },
    autoHide: options.autoHide ?? true,
    visibilityTime: options.visibilityTime,
  })
}

export const toastSuccess = ({ title = 'Success', description = '' }) =>
  showToast(
    'success',
    <ToastCard title={title} description={description} icon={IconsEnum.Success} iconColor={ColorsEnum.Success} />,
  )

export const toastWarning = ({ title = 'Warning', description = '' }) =>
  showToast(
    'warning',
    <ToastCard title={title} description={description} icon={IconsEnum.Warning} iconColor={ColorsEnum.Warning} />,
  )

export const toastError = ({ title = 'Error', description = '' }) =>
  showToast(
    'error',
    <ToastCard title={title} description={description} icon={IconsEnum.Error} iconColor={ColorsEnum.Error} />,
  )

export const toastConfig = {
  success: ({ props }: { props: ToastCardProps }) => <ToastCard {...props} />,
  warning: ({ props }: { props: ToastCardProps }) => <ToastCard {...props} />,
  error: ({ props }: { props: ToastCardProps }) => <ToastCard {...props} />,
}
