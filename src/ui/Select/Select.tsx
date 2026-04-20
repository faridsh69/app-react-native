import React, { useEffect, useMemo, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import {
  Modal,
  Platform,
  Pressable,
  StyleProp,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native'

export type SelectOption = {
  label: string
  value: string
}

export type AppSelectProps = {
  label?: string
  placeholder?: string
  helperText?: string
  errorText?: string
  hasError?: boolean
  disabled?: boolean

  value?: string | null
  options: SelectOption[]
  onChange: (value: string | null) => void

  leftIcon?: React.ReactNode
  clearable?: boolean

  containerStyle?: StyleProp<ViewStyle>
  inputContainerStyle?: StyleProp<ViewStyle>
}

export function AppSelect({
  label,
  placeholder = 'Select an option',
  helperText,
  errorText,
  hasError = false,
  disabled = false,
  value,
  options,
  onChange,
  leftIcon,
  clearable = false,
  containerStyle,
  inputContainerStyle,
}: AppSelectProps) {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  const [visible, setVisible] = useState(false)
  const [tempValue, setTempValue] = useState<string | null>(value ?? null)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    if (!visible) {
      setTempValue(value ?? null)
    }
  }, [value, visible])

  const selectedOption = useMemo(() => options.find(item => item.value === value), [options, value])

  const displayText = selectedOption?.label ?? placeholder
  const isPlaceholder = !selectedOption

  const open = () => {
    if (disabled) return
    setTempValue(value ?? options[0]?.value ?? null)
    setFocused(true)
    setVisible(true)
  }

  const close = () => {
    setVisible(false)
    setFocused(false)
  }

  const confirm = () => {
    onChange(tempValue)
    close()
  }

  const clear = () => {
    onChange(null)
    close()
  }

  return (
    <>
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
          </Text>
        )}

        <Pressable
          onPress={open}
          disabled={disabled}
          className={[
            'min-h-[52px] flex-row items-center rounded-[10px] border border-zinc-300 bg-white px-[14px]',
            focused && 'border-[#2F2F31] bg-[#2F2F31]',
            hasError && 'border-red-500',
            disabled && 'border-neutral-200 bg-neutral-100',
          ]
            .filter(Boolean)
            .join(' ')}
          style={inputContainerStyle}
        >
          {leftIcon ? <View className='items-center justify-center'>{leftIcon}</View> : null}

          <Text
            numberOfLines={1}
            className={[
              'flex-1 py-[14px] text-[16px] text-neutral-900',
              leftIcon && 'ml-2.5',
              isPlaceholder && 'text-neutral-400',
              focused && 'text-white',
              disabled && 'text-neutral-400',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {displayText}
          </Text>

          <View className='ml-2.5 flex-row items-center gap-2'>
            {clearable && value != null && !disabled ? (
              <Pressable
                onPress={e => {
                  e.stopPropagation()
                  onChange(null)
                }}
                hitSlop={8}
                className='items-center justify-center'
              >
                <Ionicons name='close-circle' size={18} color={focused ? '#FFFFFF' : '#111827'} />
              </Pressable>
            ) : null}

            <Ionicons name='chevron-down' size={18} color={focused ? '#FFFFFF' : '#525252'} />
          </View>
        </Pressable>

        {hasError && !!errorText ? (
          <Text className='text-[13px] text-red-500'>{errorText}</Text>
        ) : helperText ? (
          <Text className='text-[13px] text-neutral-500'>{helperText}</Text>
        ) : null}
      </View>

      <Modal visible={visible} animationType='none' transparent onRequestClose={close}>
        <Pressable className='flex-1 justify-end bg-black/20' onPress={close}>
          <Pressable
            onPress={e => e.stopPropagation()}
            className={[
              'overflow-hidden rounded-t-[18px]',
              isDark ? 'bg-[#1C1C1E]' : 'bg-[#F2F2F7]',
            ].join(' ')}
          >
            <View
              className={[
                'min-h-[52px] flex-row items-center justify-between border-b px-4',
                isDark ? 'border-[#3A3A3C] bg-[#2C2C2E]' : 'border-[#D1D1D6] bg-[#F9F9F9]',
              ].join(' ')}
            >
              <Pressable onPress={close} hitSlop={8}>
                <Text className='text-[17px] font-medium text-[#007AFF]'>Cancel</Text>
              </Pressable>

              <Text
                className={[
                  'text-[15px] font-semibold',
                  isDark ? 'text-white' : 'text-[#111827]',
                ].join(' ')}
              >
                {label ?? 'Select'}
              </Text>

              <Pressable onPress={confirm} hitSlop={8}>
                <Text className='text-[17px] font-medium text-[#007AFF]'>Done</Text>
              </Pressable>
            </View>

            <View
              style={{
                backgroundColor: isDark ? '#1C1C1E' : '#F2F2F7',
                paddingBottom: Platform.OS === 'ios' ? 24 : 12,
              }}
            >
              <Picker
                selectedValue={tempValue}
                onValueChange={itemValue => setTempValue(itemValue)}
                itemStyle={{ fontSize: 22, color: isDark ? '#FFFFFF' : '#111827' }}
                style={{ width: '100%', height: 216 }}
                // @ts-ignore
                themeVariant={isDark ? 'dark' : 'light'}
              >
                {options.map(option => (
                  <Picker.Item key={option.value} label={option.label} value={option.value} />
                ))}
              </Picker>
            </View>

            {clearable && value != null ? (
              <View
                style={{
                  paddingHorizontal: 16,
                  paddingTop: 8,
                  paddingBottom: 24,
                  alignItems: 'center',
                  backgroundColor: isDark ? '#1C1C1E' : '#F2F2F7',
                }}
              >
                <Pressable onPress={clear}>
                  <Text className='text-[16px] font-medium text-[#FF3B30]'>Clear selection</Text>
                </Pressable>
              </View>
            ) : null}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  )
}
