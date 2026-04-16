import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { SidesEnum, SizesEnum, VariantsEnum } from '../enums'
import { IconSymbol } from '../Icon/icon-symbol'
import { styles } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = (props: ButtonProps) => {
  const {
    label,
    iconLeft,
    iconRight,
    onClick,
    variant = VariantsEnum.Primary,
    size = SizesEnum.M,
    active = false,
    disabled = false,
    noBorderRadius = [] as SidesEnum[],
    width,
    font,
    noHover = false,
  } = props

  const containerStyle = [
    styles.button,
    styles[`size_${size}`],
    styles[`variant_${variant}`],
    active && styles[`active_${variant}`],
    disabled && styles.disabled,
    noBorderRadius.includes(SidesEnum.Left) && styles.noBorderRadius_left,
    noBorderRadius.includes(SidesEnum.Right) && styles.noBorderRadius_right,
    noBorderRadius.includes(SidesEnum.Top) && styles.noBorderRadius_top,
    noBorderRadius.includes(SidesEnum.Bottom) && styles.noBorderRadius_bottom,
    { width },
    noHover && styles.noHover,
  ]

  const fontStyle = [styles.label, font, { color: styles[`variant_${variant}`].color }] as any

  return (
    <TouchableOpacity onPress={onClick} disabled={disabled} style={containerStyle} activeOpacity={0.8}>
      {iconLeft && <IconSymbol name={iconLeft} size={size} color={styles[`variant_${variant}`].color} />}
      <Text numberOfLines={1} ellipsizeMode='tail' style={fontStyle}>
        {label}
      </Text>
      {iconRight && <IconSymbol name={iconRight} size={size} />}
    </TouchableOpacity>
  )
}
