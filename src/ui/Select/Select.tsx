import React, { useEffect, useMemo, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import { Modal, Platform, Pressable, StyleProp, StyleSheet, Text, useColorScheme, View, ViewStyle } from 'react-native'

export type SelectOption = {
  label: string
  value: string
}

type AppSelectProps = {
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
      <View style={[styles.wrapper, containerStyle]}>
        {!!label && (
          <Text style={[styles.label, hasError && styles.labelError, disabled && styles.labelDisabled]}>{label}</Text>
        )}

        <Pressable
          onPress={open}
          disabled={disabled}
          style={[
            styles.inputContainer,
            focused && styles.inputContainerFocused,
            hasError && styles.inputContainerError,
            disabled && styles.inputContainerDisabled,
            inputContainerStyle,
          ]}
        >
          {leftIcon ? <View style={styles.leftIcon}>{leftIcon}</View> : null}

          <Text
            numberOfLines={1}
            style={[
              styles.valueText,
              // @ts-ignore
              leftIcon && styles.valueTextWithLeftIcon,
              isPlaceholder && styles.placeholderText,
              focused && styles.valueTextFocused,
              disabled && styles.valueTextDisabled,
            ]}
          >
            {displayText}
          </Text>

          <View style={styles.rightSide}>
            {clearable && value != null && !disabled ? (
              <Pressable
                onPress={e => {
                  e.stopPropagation()
                  onChange(null)
                }}
                hitSlop={8}
                style={styles.iconButton}
              >
                <Ionicons name='close-circle' size={18} color={focused ? '#FFFFFF' : '#111827'} />
              </Pressable>
            ) : null}

            <Ionicons name='chevron-down' size={18} color={focused ? '#FFFFFF' : '#525252'} />
          </View>
        </Pressable>

        {hasError && !!errorText ? (
          <Text style={styles.errorText}>{errorText}</Text>
        ) : helperText ? (
          <Text style={styles.helperText}>{helperText}</Text>
        ) : null}
      </View>

      <Modal visible={visible} animationType='none' transparent onRequestClose={close}>
        <Pressable style={styles.backdrop} onPress={close}>
          <Pressable onPress={e => e.stopPropagation()} style={[styles.sheet, isDark && styles.sheetDark]}>
            <View style={[styles.toolbar, isDark && styles.toolbarDark]}>
              <Pressable onPress={close} hitSlop={8}>
                <Text style={styles.toolbarAction}>Cancel</Text>
              </Pressable>

              <Text style={[styles.toolbarTitle, isDark && styles.toolbarTitleDark]}>{label ?? 'Select'}</Text>

              <Pressable onPress={confirm} hitSlop={8}>
                <Text style={styles.toolbarAction}>Done</Text>
              </Pressable>
            </View>

            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={tempValue}
                onValueChange={itemValue => setTempValue(itemValue)}
                itemStyle={[styles.pickerItem, isDark && styles.pickerItemDark]}
                style={styles.picker}
                // @ts-ignore
                themeVariant={isDark ? 'dark' : 'light'}
              >
                {options.map(option => (
                  <Picker.Item key={option.value} label={option.label} value={option.value} />
                ))}
              </Picker>
            </View>

            {clearable && value != null ? (
              <View style={[styles.footer, isDark && styles.footerDark]}>
                <Pressable onPress={clear}>
                  <Text style={styles.clearText}>Clear selection</Text>
                </Pressable>
              </View>
            ) : null}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  )
}

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
  leftIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    flex: 1,
    fontSize: 16,
    color: '#171717',
    paddingVertical: 14,
  },
  valueTextWithLeftIcon: {
    marginLeft: 10,
  },
  valueTextFocused: {
    color: '#FFFFFF',
  },
  valueTextDisabled: {
    color: '#A3A3A3',
  },
  placeholderText: {
    color: '#A3A3A3',
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 10,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  helperText: {
    fontSize: 13,
    color: '#737373',
  },
  errorText: {
    fontSize: 13,
    color: '#EF4444',
  },

  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  sheet: {
    backgroundColor: '#F2F2F7',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: 'hidden',
  },
  sheetDark: {
    backgroundColor: '#1C1C1E',
  },
  toolbar: {
    minHeight: 52,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D1D1D6',
    backgroundColor: '#F9F9F9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toolbarDark: {
    backgroundColor: '#2C2C2E',
    borderBottomColor: '#3A3A3C',
  },
  toolbarAction: {
    fontSize: 17,
    color: '#007AFF',
    fontWeight: '500',
  },
  toolbarTitle: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '600',
  },
  toolbarTitleDark: {
    color: '#FFFFFF',
  },
  pickerWrapper: {
    backgroundColor: '#F2F2F7',
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
  },
  picker: {
    width: '100%',
    height: 216,
  },
  pickerItem: {
    fontSize: 22,
    color: '#111827',
  },
  pickerItemDark: {
    color: '#FFFFFF',
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
  },
  footerDark: {
    backgroundColor: '#1C1C1E',
  },
  clearText: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '500',
  },
})
