import React from 'react'
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native'

type RadioOption = {
  label: string
  value: string
  disabled?: boolean
}

type RadioListSize = 'sm' | 'md' | 'lg'
type RadioListBackground = 'transparent' | 'muted'

export type RadioListProps = {
  options: RadioOption[]
  value?: string | null
  onChange?: (value: string) => void

  label?: string
  required?: boolean
  hasError?: boolean
  errorText?: string
  helperText?: string
  disabled?: boolean
  background?: RadioListBackground
  size?: RadioListSize

  containerStyle?: StyleProp<ViewStyle>
}

const sizeMap = {
  sm: {
    text: 14,
    dotOuter: 18,
    dotInner: 8,
    gap: 14,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  md: {
    text: 16,
    dotOuter: 20,
    dotInner: 10,
    gap: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  lg: {
    text: 18,
    dotOuter: 22,
    dotInner: 10,
    gap: 18,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
} as const

export function RadioList({
  options,
  value,
  onChange,
  label,
  required = false,
  hasError = false,
  errorText,
  helperText,
  disabled = false,
  background = 'transparent',
  size = 'md',
  containerStyle,
}: RadioListProps) {
  const tokens = sizeMap[size]

  return (
    <View className='w-full gap-1.5' style={containerStyle}>
      {!!label && (
        <Text
          className={[
            'text-[15px] font-medium text-neutral-900',
            hasError && 'text-red-500',
            disabled && 'text-neutral-400',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {label}
          {required ? <Text className='text-red-500'> *</Text> : null}
        </Text>
      )}

      <View
        className={[
          'flex-row flex-wrap items-center rounded-[10px]',
          background === 'muted' && 'bg-neutral-100 px-2.5 py-1',
          // hasError && 'border border-red-500 px-2.5 py-1',
          disabled && 'opacity-60',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {options.map(option => {
          const selected = option.value === value
          const optionDisabled = disabled || option.disabled

          return (
            <Pressable
              key={option.value}
              onPress={() => {
                if (!optionDisabled) onChange?.(option.value)
              }}
              disabled={optionDisabled}
              className='flex-row items-center'
              style={{
                gap: 10,
                marginRight: tokens.gap,
                paddingVertical: tokens.paddingVertical,
                paddingHorizontal: 2,
              }}
              accessibilityRole='radio'
              accessibilityState={{
                checked: selected,
                disabled: optionDisabled,
              }}
            >
              <View
                style={[
                  {
                    borderWidth: 1.5,
                    borderColor: '#A3A3A3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFFFFF',
                  },
                  {
                    width: tokens.dotOuter,
                    height: tokens.dotOuter,
                    borderRadius: tokens.dotOuter / 2,
                  },
                  selected && { borderColor: '#111111' },
                  hasError && { borderColor: '#EF4444' },
                  optionDisabled && { borderColor: '#CFCFCF', backgroundColor: '#F5F5F5' },
                ]}
              >
                {selected ? (
                  <View
                    style={[
                      {
                        width: tokens.dotInner,
                        height: tokens.dotInner,
                        borderRadius: tokens.dotInner / 2,
                        backgroundColor: optionDisabled ? '#A3A3A3' : '#111111',
                      },
                    ]}
                  />
                ) : null}
              </View>

              <Text
                style={{
                  fontSize: tokens.text,
                  color: optionDisabled ? '#A3A3A3' : selected ? '#111111' : '#171717',
                  fontWeight: selected ? '500' : '400',
                }}
              >
                {option.label}
              </Text>
            </Pressable>
          )
        })}
      </View>

      {hasError && !!errorText ? (
        <Text className='text-[13px] text-red-500'>{errorText}</Text>
      ) : helperText ? (
        <Text className='text-[13px] text-neutral-500'>{helperText}</Text>
      ) : null}
    </View>
  )
}
