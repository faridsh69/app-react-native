import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import { Icon } from '../Icon/Icon'
import { Image } from '../Image/Image'
import { IconsEnum, SizesEnum } from '../theme/themeEnums'
import { AvatarProps } from './Avatar.types'

export const Avatar = (props: AvatarProps) => {
  const { src, alt, size = SizesEnum.M, width } = props

  const containerStyle: StyleProp<ViewStyle> = [
    {
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#F5F5F5',
      borderWidth: 1,
      borderColor: 'transparent',
    },
    !width &&
      ({
        s: { width: 32, minWidth: 32, height: 32, minHeight: 32, borderRadius: 16 },
        m: { width: 40, minWidth: 40, height: 40, minHeight: 40, borderRadius: 20 },
        l: { width: 48, minWidth: 48, height: 48, minHeight: 48, borderRadius: 24 },
      }[size] as ViewStyle),
    { width },
    { height: width },
  ]

  return (
    <View
      style={containerStyle}
      accessibilityRole='image'
      accessibilityLabel={src ? 'User avatar' : 'Default avatar'}
    >
      {!!src && (
        <Image
          src={src}
          alt={alt || 'user avatar'}
          width={width}
          height={width}
          borderRadius={width ? width / 2 : 0}
        />
      )}
      {!src && <Icon icon={IconsEnum.User} />}
    </View>
  )
}
