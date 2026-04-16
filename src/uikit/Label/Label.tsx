import React, { useMemo } from 'react'
import { ColorsEnum, FontsEnum } from '@/ui/enums'
import { useThemeColor } from '@/ui/theme/hooks/useThemeColor'
import { Pressable, Text, View } from 'react-native'

import { styles } from './Label.styles'
import { LabelProps } from './Label.types'

export const Label = (props: LabelProps) => {
  const {
    label = '',
    disabled = false,
    font = FontsEnum.Label16,
    linesCount = 1,
    hasError = false,
    active = false,
    color,
    textAlign = 'left',
    required = false,
    onClick,
    cursorPointer = false,
  } = props
  if (!label) return null

  const baseColor = useThemeColor({}, ColorsEnum.Black)
  const errorColor = useThemeColor({}, ColorsEnum.Error)
  const disabledColor = useThemeColor({}, ColorsEnum.Disabled)
  const activeColor = useThemeColor({}, ColorsEnum.PrimaryMain)

  const textColor = useMemo(() => {
    const stateColor = hasError ? errorColor : disabled ? disabledColor : active ? activeColor : baseColor

    return color ?? stateColor
  }, [hasError, disabled, active, color, errorColor, disabledColor, activeColor, baseColor])

  const wrapperStyle = [styles.wrapper, cursorPointer && styles.cursorPointer]
  const textStyle = [font, styles.textBase, { color: textColor, textAlign }]

  const Content = (
    <View style={styles.textContainer}>
      {/* @ts-ignore */}
      <Text style={textStyle} numberOfLines={linesCount} ellipsizeMode='tail'>
        {label}
      </Text>
      {required ? (
        <Text
          style={[styles.required, { color: useThemeColor({}, ColorsEnum.Error) }]}
          accessibilityElementsHidden
          importantForAccessibility='no'
        >
          *
        </Text>
      ) : null}
    </View>
  )

  if (!onClick) {
    return <View style={wrapperStyle}>{Content}</View>
  }

  return (
    <View style={wrapperStyle}>
      <Pressable
        onPress={onClick}
        disabled={disabled}
        accessibilityRole='button'
        accessibilityState={{ disabled, selected: active }}
        android_ripple={{}}
        style={styles.pressable}
      >
        {Content}
      </Pressable>
    </View>
  )
}
