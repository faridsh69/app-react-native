import React, { ReactNode, useMemo } from 'react'
import { Pressable, Text, TextStyle, View } from 'react-native'

import { ColorsEnum, ColorsEnumType, FontsEnum, FontsEnumType, PlacementsEnumType } from '../theme/themeEnums'

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

  const baseColor = ColorsEnum.Black
  const errorColor = ColorsEnum.Error
  const disabledColor = ColorsEnum.Disabled
  const activeColor = ColorsEnum.PrimaryMain

  const textColor = useMemo(() => {
    const stateColor = hasError ? errorColor : disabled ? disabledColor : active ? activeColor : baseColor

    return color ?? stateColor
  }, [hasError, disabled, active, color, errorColor, disabledColor, activeColor, baseColor])

  const wrapperClassName = [
    'max-w-full min-w-0 flex-row items-start gap-space-s',
    cursorPointer && 'web:cursor-pointer',
  ]
    .filter(Boolean)
    .join(' ')
  const textStyle = [font as TextStyle | undefined, { color: textColor, textAlign }].filter(Boolean) as TextStyle[]

  const Content = (
    <View className='max-w-full min-w-0 flex-row items-center shrink'>
      <Text style={textStyle} numberOfLines={linesCount} ellipsizeMode='tail' className='max-w-full min-w-0 shrink'>
        {label}
      </Text>
      {required ? (
        <Text
          style={{ color: ColorsEnum.Error }}
          className='ml-space-s w-3.5 text-center'
          accessibilityElementsHidden
          importantForAccessibility='no'
        >
          *
        </Text>
      ) : null}
    </View>
  )

  if (!onClick) {
    return <View className={wrapperClassName}>{Content}</View>
  }

  return (
    <View className={wrapperClassName}>
      <Pressable
        onPress={onClick}
        disabled={disabled}
        accessibilityRole='button'
        accessibilityState={{ disabled, selected: active }}
        android_ripple={{}}
        className='max-w-full min-w-0 shrink'
      >
        {Content}
      </Pressable>
    </View>
  )
}

type LabelProps = {
  label?: string | number | null | ReactNode
  font?: FontsEnumType
  disabled?: boolean
  linesCount?: number
  hasError?: boolean
  active?: boolean
  hint?: string
  zIndex?: number
  hintZIndex?: number
  mouseEnterDelay?: number
  forceTooltip?: boolean
  color?: ColorsEnumType
  textAlign?: TextStyle['textAlign']
  required?: boolean
  tooltipPlacement?: PlacementsEnumType
  onClick?: () => void
  cursorPointer?: boolean
}
