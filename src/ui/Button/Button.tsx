import React from 'react'
import { designColors } from '@/ui/theme/common.style'
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

import { Icon } from '../Icon/Icon'
import { SidesEnum, SizesEnum, VariantsEnum } from '../theme/themeEnums'
import { ButtonProps } from './Button.types'

const sizeClassMap: Record<SizesEnum, string> = {
  [SizesEnum.S]: 'h-control-s min-h-control-s px-space-s',
  [SizesEnum.M]: 'h-control-m min-h-control-m px-space-m',
  [SizesEnum.L]: 'h-control-l min-h-control-l px-space-l',
}

const variantClassMap: Record<VariantsEnum, string> = {
  [VariantsEnum.Primary]: 'border-brand-primary bg-brand-primary',
  [VariantsEnum.Secondary]: 'border-brand-border bg-brand-surface',
  [VariantsEnum.Text]: 'min-h-control-s border-transparent bg-transparent px-0',
}

const activeVariantClassMap: Record<VariantsEnum, string> = {
  [VariantsEnum.Primary]: 'border-brand-primary bg-brand-surface',
  [VariantsEnum.Secondary]: 'border-brand-border bg-brand-primary',
  [VariantsEnum.Text]: 'border-transparent bg-transparent',
}

const textColorClassMap: Record<VariantsEnum, string> = {
  [VariantsEnum.Primary]: 'text-brand-inverse',
  [VariantsEnum.Secondary]: 'text-brand-ink',
  [VariantsEnum.Text]: 'text-brand-ink',
}

const activeTextColorClassMap: Record<VariantsEnum, string> = {
  [VariantsEnum.Primary]: 'text-brand-primary',
  [VariantsEnum.Secondary]: 'text-brand-inverse',
  [VariantsEnum.Text]: 'text-brand-ink',
}

const textColorValueMap: Record<VariantsEnum, string> = {
  [VariantsEnum.Primary]: designColors.primaryInverse,
  [VariantsEnum.Secondary]: designColors.black,
  [VariantsEnum.Text]: designColors.black,
}

const activeTextColorValueMap: Record<VariantsEnum, string> = {
  [VariantsEnum.Primary]: designColors.primaryMain,
  [VariantsEnum.Secondary]: designColors.primaryInverse,
  [VariantsEnum.Text]: designColors.black,
}

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

  const containerClassName = [
    'flex-row items-center justify-center gap-2 rounded-pill border web:select-none',
    sizeClassMap[size],
    active ? activeVariantClassMap[variant] : variantClassMap[variant],
    disabled && 'border-0 bg-brand-disabled opacity-50',
    noBorderRadius.includes(SidesEnum.Left) && 'rounded-l-none',
    noBorderRadius.includes(SidesEnum.Right) && 'rounded-r-none',
    noBorderRadius.includes(SidesEnum.Top) && 'rounded-t-none',
    noBorderRadius.includes(SidesEnum.Bottom) && 'rounded-b-none',
    noHover && 'web:hover:opacity-100',
  ]
    .filter(Boolean)
    .join(' ')

  const contentColorClassName = disabled
    ? 'text-brand-disabled-foreground'
    : active
      ? activeTextColorClassMap[variant]
      : textColorClassMap[variant]
  const contentColor = disabled
    ? designColors.disabledInverse
    : active
      ? activeTextColorValueMap[variant]
      : textColorValueMap[variant]

  const fontStyle = [{ textAlign: 'center', includeFontPadding: false }, font as TextStyle | undefined].filter(
    Boolean,
  ) as TextStyle[]
  const widthStyle: ViewStyle | undefined =
    width !== undefined ? ({ width: width as ViewStyle['width'] } as ViewStyle) : undefined

  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={disabled}
      style={widthStyle}
      className={containerClassName}
      activeOpacity={0.8}
    >
      {iconLeft && <Icon icon={iconLeft} size={size} className={contentColorClassName} color={contentColor} />}
      <Text numberOfLines={1} ellipsizeMode='tail' style={fontStyle} className={contentColorClassName}>
        {label}
      </Text>
      {iconRight && <Icon icon={iconRight} size={size} className={contentColorClassName} color={contentColor} />}
    </TouchableOpacity>
  )
}
