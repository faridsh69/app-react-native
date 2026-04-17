import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import { ColorsEnum, SIZE_MAP, SizesEnum } from '../theme/themeEnums'
import { LoaderProps } from './Loader.types'

export const Loader = ({
  label = 'The page is currently loading.',
  subLabel = 'We appreciate your patience.',
  size = SizesEnum.M,
  isLoading = true,
}: LoaderProps) => {
  if (!isLoading) return null

  return (
    <View
      className='items-center justify-center gap-5'
      accessibilityRole='progressbar'
      accessibilityLabel={label}
      accessibilityHint={subLabel}
    >
      <ActivityIndicator size={SIZE_MAP[size]} color={ColorsEnum.PrimaryMain} />

      <View className='items-center gap-[5px]'>
        <Text style={{ fontSize: 14, fontWeight: '600', lineHeight: 18, marginVertical: 0, textAlign: 'center' }}>
          {label}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 18, marginVertical: 0, textAlign: 'center' }}>
          {subLabel}
        </Text>
      </View>
    </View>
  )
}
