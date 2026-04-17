import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import { ColorsEnum, SIZE_MAP, SizesEnum } from '../theme/themeEnums'
import { styles } from './Loader.styles'
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
      style={styles.wrapper}
      accessibilityRole='progressbar'
      accessibilityLabel={label}
      accessibilityHint={subLabel}
    >
      <ActivityIndicator size={SIZE_MAP[size]} color={ColorsEnum.PrimaryMain} />

      <View style={styles.texts}>
        <Text style={[styles.loadingText, styles.loadingTextBold]}>{label}</Text>
        <Text style={styles.loadingText}>{subLabel}</Text>
      </View>
    </View>
  )
}
