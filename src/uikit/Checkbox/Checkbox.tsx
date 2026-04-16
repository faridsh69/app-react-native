import React from 'react'
import { designColors, designSpacing } from '@/ui/common.style'
import { IconsEnum, SizesEnum } from '@/ui/enums'
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'

import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import { styles } from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'

export const Checkbox = ({
  checked = false,
  onChange,
  label,
  disabled = false,
  required = false,
  hasError = false,
  hint = '',
  size = SizesEnum.M,
}: CheckboxProps) => {
  const containerStyle: StyleProp<ViewStyle> = [styles.wrapper, { paddingLeft: designSpacing[size] }]

  const checkboxStyle: StyleProp<ViewStyle> = [
    styles.box,
    styles[`size_${size}`],
    checked ? styles.checked : styles.unchecked,
    disabled && styles.disabled,
    hasError && styles.error,
  ]

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => !disabled && onChange?.(!checked)}
      activeOpacity={0.8}
      disabled={disabled}
      accessibilityRole='checkbox'
      accessibilityState={{ checked, disabled }}
      accessibilityLabel={label}
    >
      <View style={checkboxStyle}>
        {checked && <Icon icon={IconsEnum.Check} size={SizesEnum.S} color={designColors.white} />}
      </View>

      {label && (
        <Label
          label={label}
          required={required}
          hasError={hasError}
          disabled={disabled}
          hint={hint}
          // style={styles.label}
        />
      )}
    </TouchableOpacity>
  )
}
