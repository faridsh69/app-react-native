import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import { Icon } from '../Icon/Icon'
import { Image } from '../Image/Image'
import { IconsEnum, SizesEnum } from '../theme/themeEnums'
import { styles } from './Avatar.styles'
import { AvatarProps } from './Avatar.types'

export const Avatar = (props: AvatarProps) => {
  const { src, alt, size = SizesEnum.M, width } = props

  const containerStyle: StyleProp<ViewStyle> = [
    styles.avatar,
    !width && styles[`size_${size}`],
    { width },
    { height: width },
  ]

  return (
    <View style={containerStyle} accessibilityRole='image' accessibilityLabel={src ? 'User avatar' : 'Default avatar'}>
      {!!src && (
        <Image src={src} alt={alt || 'user avatar'} width={width} height={width} borderRadius={width ? width / 2 : 0} />
      )}
      {!src && <Icon icon={IconsEnum.User} />}
    </View>
  )
}
