import React, { forwardRef, useMemo, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import * as Clipboard from 'expo-clipboard'
import {
  Pressable,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'

import { toastSuccess } from '../Toast/Toast'

type RightElementType = 'unit' | 'clearable' | 'password' | 'copyable' | 'custom'

export type AppTextInputProps = Omit<TextInputProps, 'editable'> & {
  label?: string
  helperText?: string
  errorText?: string
  hasError?: boolean
  disabled?: boolean
  editable?: boolean

  leftIcon?: React.ReactNode

  unit?: string
  clearable?: boolean
  passwordToggle?: boolean
  copyable?: boolean
  rightElement?: React.ReactNode

  containerStyle?: StyleProp<ViewStyle>
  inputContainerStyle?: StyleProp<ViewStyle>

  onClear?: () => void
  onCopy?: (value: string) => void

  required?: boolean
  useBottomSheetTextInput?: boolean
}

export const AppTextInput = forwardRef<TextInput, AppTextInputProps>(
  (
    {
      label,
      helperText,
      errorText,
      hasError = false,
      disabled = false,

      leftIcon,

      unit,
      clearable = false,
      passwordToggle = false,
      copyable = false,
      rightElement,

      value,
      secureTextEntry,
      editable,
      style,
      containerStyle,
      inputContainerStyle,
      onFocus,
      onBlur,
      onChangeText,
      onClear,
      onCopy,

      required = false,
      useBottomSheetTextInput = false,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false)
    const [hidePassword, setHidePassword] = useState(Boolean(passwordToggle || secureTextEntry))

    const isEditable = editable ?? !disabled
    const stringValue = useMemo(() => (typeof value === 'string' ? value : ''), [value])
    const InputComponent = useBottomSheetTextInput ? BottomSheetTextInput : TextInput
    const setInputRef = (instance: TextInput | null | undefined) => {
      if (typeof ref === 'function') {
        ref(instance ?? null)
        return
      }

      if (ref) {
        ref.current = instance ?? null
      }
    }

    const rightType: RightElementType | null = useMemo(() => {
      if (rightElement) return 'custom'
      if (unit) return 'unit'
      if (passwordToggle) return 'password'
      if (clearable && stringValue.length > 0 && !disabled) return 'clearable'
      if (copyable && stringValue.length > 0) return 'copyable'
      return null
    }, [rightElement, unit, passwordToggle, clearable, copyable, stringValue, disabled])

    const handleFocus: TextInputProps['onFocus'] = e => {
      setFocused(true)
      onFocus?.(e)
    }

    const handleBlur: TextInputProps['onBlur'] = e => {
      setFocused(false)
      onBlur?.(e)
    }

    const handleClear = () => {
      onChangeText?.('')
      onClear?.()
    }

    const handleCopy = async () => {
      await Clipboard.setStringAsync(stringValue)
      onCopy?.(stringValue)
      toastSuccess({ title: 'Success', description: 'Copied to clipboard.' })
    }

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
            {label}xxx
          </Text>
        )}

        <View
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

          <InputComponent
            ref={setInputRef}
            value={value}
            editable={isEditable}
            style={style}
            className={[
              'flex-1 py-3 text-[16px] text-neutral-900',
              leftIcon && 'ml-2.5',
              rightType && 'mr-2.5',
              disabled && 'text-neutral-400',
              // focused && 'text-white',
            ]
              .filter(Boolean)
              .join(' ')}
            placeholderTextColor={disabled ? '#C7C7C7' : '#A3A3A3'}
            secureTextEntry={passwordToggle ? hidePassword : secureTextEntry}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={onChangeText}
            {...props}
          />

          {rightType === 'unit' && (
            <Text className='text-[16px] font-medium text-neutral-400'>{unit}</Text>
          )}

          {rightType === 'clearable' && (
            <Pressable onPress={handleClear} hitSlop={8} className='items-center justify-center'>
              <Ionicons name='close-circle' size={18} color='#111827' />
            </Pressable>
          )}

          {rightType === 'password' && (
            <Pressable
              onPress={() => setHidePassword(prev => !prev)}
              hitSlop={8}
              className='items-center justify-center'
            >
              <Ionicons
                name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color='#525252'
              />
            </Pressable>
          )}

          {rightType === 'copyable' && (
            <Pressable onPress={handleCopy} hitSlop={8} className='items-center justify-center'>
              <Ionicons name='copy-outline' size={20} color='#111827' />
            </Pressable>
          )}

          {rightType === 'custom' && (
            <View className='items-center justify-center'>{rightElement}</View>
          )}
        </View>

        {hasError && !!errorText ? (
          <Text className='text-[13px] text-red-500'>{errorText}</Text>
        ) : helperText ? (
          <Text className='text-[13px] text-neutral-500'>{helperText}</Text>
        ) : null}
      </View>
    )
  },
)

AppTextInput.displayName = 'AppTextInput'
