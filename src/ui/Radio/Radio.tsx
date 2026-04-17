import React from 'react'
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'

type RadioOption = {
  label: string
  value: string
  disabled?: boolean
}

type RadioListSize = 'sm' | 'md' | 'lg'
type RadioListBackground = 'transparent' | 'muted'

type RadioListProps = {
  options: RadioOption[]
  value?: string | null
  onChange: (value: string) => void

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
    <View style={[styles.wrapper, containerStyle]}>
      {!!label && (
        <Text style={[styles.label, hasError && styles.labelError, disabled && styles.labelDisabled]}>
          {label}
          {required ? <Text style={styles.required}> *</Text> : null}
        </Text>
      )}

      <View
        style={[
          styles.optionsContainer,
          background === 'muted' && styles.optionsContainerMuted,
          hasError && styles.optionsContainerError,
          disabled && styles.optionsContainerDisabled,
        ]}
      >
        {options.map(option => {
          const selected = option.value === value
          const optionDisabled = disabled || option.disabled

          return (
            <Pressable
              key={option.value}
              onPress={() => {
                if (!optionDisabled) onChange(option.value)
              }}
              disabled={optionDisabled}
              style={[
                styles.option,
                {
                  gap: 10,
                  marginRight: tokens.gap,
                  paddingVertical: tokens.paddingVertical,
                  paddingHorizontal: 2,
                },
              ]}
              accessibilityRole='radio'
              accessibilityState={{
                checked: selected,
                disabled: optionDisabled,
              }}
            >
              <View
                style={[
                  styles.radioOuter,
                  {
                    width: tokens.dotOuter,
                    height: tokens.dotOuter,
                    borderRadius: tokens.dotOuter / 2,
                  },
                  selected && styles.radioOuterSelected,
                  hasError && styles.radioOuterError,
                  optionDisabled && styles.radioOuterDisabled,
                ]}
              >
                {selected ? (
                  <View
                    style={[
                      styles.radioInner,
                      {
                        width: tokens.dotInner,
                        height: tokens.dotInner,
                        borderRadius: tokens.dotInner / 2,
                      },
                      optionDisabled && styles.radioInnerDisabled,
                    ]}
                  />
                ) : null}
              </View>

              <Text
                style={[
                  styles.optionLabel,
                  { fontSize: tokens.text },
                  selected && styles.optionLabelSelected,
                  optionDisabled && styles.optionLabelDisabled,
                ]}
              >
                {option.label}
              </Text>
            </Pressable>
          )
        })}
      </View>

      {hasError && !!errorText ? (
        <Text style={styles.errorText}>{errorText}</Text>
      ) : helperText ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null}
    </View>
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
  required: {
    color: '#EF4444',
  },
  labelError: {
    color: '#EF4444',
  },
  labelDisabled: {
    color: '#A3A3A3',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: 10,
  },
  optionsContainerMuted: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  optionsContainerError: {
    borderWidth: 1,
    borderColor: '#EF4444',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  optionsContainerDisabled: {
    opacity: 0.6,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    borderWidth: 1.5,
    borderColor: '#A3A3A3',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  radioOuterSelected: {
    borderColor: '#111111',
  },
  radioOuterError: {
    borderColor: '#EF4444',
  },
  radioOuterDisabled: {
    borderColor: '#CFCFCF',
    backgroundColor: '#F5F5F5',
  },
  radioInner: {
    backgroundColor: '#111111',
  },
  radioInnerDisabled: {
    backgroundColor: '#A3A3A3',
  },
  optionLabel: {
    color: '#171717',
    fontWeight: '400',
  },
  optionLabelSelected: {
    color: '#111111',
    fontWeight: '500',
  },
  optionLabelDisabled: {
    color: '#A3A3A3',
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
