import React, { forwardRef, useMemo, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'
import { Pressable, StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native'

type RightElementType = 'unit' | 'clearable' | 'password' | 'copyable' | 'custom'

type AppTextInputProps = Omit<TextInputProps, 'editable'> & {
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
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false)
    const [hidePassword, setHidePassword] = useState(Boolean(passwordToggle || secureTextEntry))

    const isEditable = editable ?? !disabled
    const stringValue = useMemo(() => (typeof value === 'string' ? value : ''), [value])

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
    }

    const containerStyles = [
      styles.inputContainer,
      focused && styles.inputContainerFocused,
      hasError && styles.inputContainerError,
      disabled && styles.inputContainerDisabled,
      inputContainerStyle,
    ]

    const textInputStyles = [
      styles.input,
      leftIcon ? styles.inputWithLeftIcon : null,
      rightType ? styles.inputWithRightElement : null,
      disabled && styles.inputDisabled,
      focused && styles.inputFocused,
      style,
    ]

    return (
      <View style={[styles.wrapper, containerStyle]}>
        {!!label && (
          <Text style={[styles.label, hasError && styles.labelError, disabled && styles.labelDisabled]}>{label}</Text>
        )}

        <View style={containerStyles}>
          {leftIcon ? <View style={styles.leftIcon}>{leftIcon}</View> : null}

          <TextInput
            ref={ref}
            value={value}
            editable={isEditable}
            style={textInputStyles}
            placeholderTextColor={disabled ? '#C7C7C7' : '#A3A3A3'}
            secureTextEntry={passwordToggle ? hidePassword : secureTextEntry}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={onChangeText}
            {...props}
          />

          {rightType === 'unit' && <Text style={styles.unitText}>{unit}</Text>}

          {rightType === 'clearable' && (
            <Pressable onPress={handleClear} hitSlop={8} style={styles.iconButton}>
              <Ionicons name='close-circle' size={18} color='#111827' />
            </Pressable>
          )}

          {rightType === 'password' && (
            <Pressable onPress={() => setHidePassword(prev => !prev)} hitSlop={8} style={styles.iconButton}>
              <Ionicons name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={20} color='#525252' />
            </Pressable>
          )}

          {rightType === 'copyable' && (
            <Pressable onPress={handleCopy} hitSlop={8} style={styles.iconButton}>
              <Ionicons name='copy-outline' size={20} color='#111827' />
            </Pressable>
          )}

          {rightType === 'custom' && <View style={styles.rightCustom}>{rightElement}</View>}
        </View>

        {hasError && !!errorText ? (
          <Text style={styles.errorText}>{errorText}</Text>
        ) : helperText ? (
          <Text style={styles.helperText}>{helperText}</Text>
        ) : null}
      </View>
    )
  },
)

AppTextInput.displayName = 'AppTextInput'

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    gap: 6,
  },
  label: {
    fontSize: 15,
    color: '#171717',
    fontWeight: '500',
  },
  labelError: {
    color: '#EF4444',
  },
  labelDisabled: {
    color: '#A3A3A3',
  },
  inputContainer: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: '#D4D4D8',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  inputContainerFocused: {
    backgroundColor: '#2F2F31',
    borderColor: '#2F2F31',
  },
  inputContainerError: {
    borderColor: '#EF4444',
  },
  inputContainerDisabled: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E5E5E5',
  },
  input: {
    flex: 1,
    color: '#171717',
    fontSize: 16,
    paddingVertical: 12,
  },
  inputFocused: {
    color: '#FFFFFF',
  },
  inputDisabled: {
    color: '#A3A3A3',
  },
  inputWithLeftIcon: {
    marginLeft: 10,
  },
  inputWithRightElement: {
    marginRight: 10,
  },
  leftIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightCustom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitText: {
    fontSize: 16,
    color: '#A3A3A3',
    fontWeight: '500',
  },
  helperText: {
    fontSize: 13,
    color: '#737373',
  },
  errorText: {
    fontSize: 13,
    color: '#EF4444',
  },
})
