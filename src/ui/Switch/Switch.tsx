import React from 'react'
import { StyleProp, Switch, Text, View, ViewStyle } from 'react-native'

type AppSwitchSize = 'sm' | 'md'

type AppSwitchProps = {
  value: boolean
  onChange: (value: boolean) => void

  label?: string
  description?: string
  required?: boolean
  hasError?: boolean
  errorText?: string
  helperText?: string
  disabled?: boolean
  size?: AppSwitchSize

  containerStyle?: StyleProp<ViewStyle>
}

const sizeMap = {
  sm: {
    labelSize: 15,
    descriptionSize: 13,
    gap: 10,
    scale: 0.9,
  },
  md: {
    labelSize: 16,
    descriptionSize: 14,
    gap: 12,
    scale: 1,
  },
} as const

export function AppSwitch({
  value,
  onChange,
  label,
  description,
  required = false,
  hasError = false,
  errorText,
  helperText,
  disabled = false,
  size = 'md',
  containerStyle,
}: AppSwitchProps) {
  const tokens = sizeMap[size]

  return (
    <View className='w-full gap-1.5' style={containerStyle}>
      <View className={['min-h-[52px] flex-row items-center justify-between rounded-xl bg-white px-[14px] py-3', disabled && 'opacity-60', hasError && 'border border-red-500'].filter(Boolean).join(' ')}>
        <View style={{ flex: 1, marginRight: tokens.gap }}>
          {!!label && (
            <Text style={{ fontSize: tokens.labelSize, color: disabled ? '#A3A3A3' : '#171717', fontWeight: '500' }}>
              {label}
              {required ? <Text className='text-red-500'> *</Text> : null}
            </Text>
          )}

          {!!description && (
            <Text style={{ marginTop: 4, fontSize: tokens.descriptionSize, color: disabled ? '#A3A3A3' : '#737373' }}>
              {description}
            </Text>
          )}
        </View>

        <View
          style={{
            transform: [{ scale: tokens.scale }],
          }}
        >
          <Switch
            value={value}
            onValueChange={onChange}
            disabled={disabled}
            ios_backgroundColor='#D1D1D6'
            trackColor={{
              false: '#D1D1D6',
              true: '#34C759',
            }}
            thumbColor='#FFFFFF'
          />
        </View>
      </View>

      {hasError && !!errorText ? (
        <Text className='text-[13px] text-red-500'>{errorText}</Text>
      ) : helperText ? (
        <Text className='text-[13px] text-neutral-500'>{helperText}</Text>
      ) : null}
    </View>
  )
}
