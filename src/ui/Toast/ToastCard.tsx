import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'

import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import { ColorsEnum, FontsEnum, IconsEnum, SizesEnum } from '../theme/themeEnums'
import { ToastCardProps } from './Toast.types'
import { styles } from './ToastCard.styles'

export const ToastCard = (props: ToastCardProps) => {
  const { closeToast, title, description, icon, iconColor } = props

  return (
    <View style={styles.wrap} pointerEvents='box-none'>
      <View style={[styles.toast, { borderLeftColor: iconColor }]}>
        <View style={styles.header}>
          <View style={styles.check}>{icon && <Icon icon={icon} color={iconColor} size={SizesEnum.M} />}</View>

          <View style={styles.title}>
            <Label label={title} font={FontsEnum.Label16} color={ColorsEnum.Black} />
          </View>

          <TouchableOpacity
            style={styles.close}
            onPress={() => (closeToast ? closeToast() : Toast.hide())}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Icon icon={IconsEnum.CloseBold} size={SizesEnum.S} color={ColorsEnum.Black} />
          </TouchableOpacity>
        </View>

        {!!description && <Label label={description} font={FontsEnum.Text14} color={ColorsEnum.Black} />}

        {/* TODO: progress bar */}
      </View>
    </View>
  )
}
