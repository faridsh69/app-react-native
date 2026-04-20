import React from 'react'
import { designColors } from '@/ui/theme/common.style'
import { TouchableOpacity, View } from 'react-native'

import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import { IconsEnum, SizesEnum } from '../theme/themeEnums'
import { CheckboxProps } from './Checkbox.types'

const checkboxSizeClassMap: Record<SizesEnum, string> = {
  [SizesEnum.S]: 'h-4 w-4',
  [SizesEnum.M]: 'h-5 w-5',
  [SizesEnum.L]: 'h-6 w-6',
}

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
  const containerClassName = 'relative flex-row items-center gap-space-s'
  const checkboxClassName = [
    'items-center justify-center rounded-control-s border border-brand-gray-600',
    checkboxSizeClassMap[size],
    checked ? 'bg-brand-primary' : 'bg-brand-white',
    disabled && 'opacity-60',
    hasError && 'border-brand-danger',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <TouchableOpacity
      className={containerClassName}
      onPress={() => !disabled && onChange?.(!checked)}
      activeOpacity={0.8}
      disabled={disabled}
      accessibilityRole='checkbox'
      accessibilityState={{ checked, disabled }}
      accessibilityLabel={label}
    >
      <View className={checkboxClassName}>
        {checked && (
          <Icon
            icon={IconsEnum.Check}
            size={SizesEnum.S}
            className='text-brand-white'
            color={designColors.white}
          />
        )}
      </View>

      {label && (
        <Label
          label={label}
          required={required}
          hasError={hasError}
          disabled={disabled}
          hint={hint}
        />
      )}
    </TouchableOpacity>
  )
}
