import React from 'react'
import { StyleProp, StyleSheet, Switch, Text, View, ViewStyle } from 'react-native'

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
    <View style={[styles.wrapper, containerStyle]}>
      <View style={[styles.row, disabled && styles.rowDisabled, hasError && styles.rowError]}>
        <View style={[styles.textBlock, { marginRight: tokens.gap }]}>
          {!!label && (
            <Text style={[styles.label, { fontSize: tokens.labelSize }, disabled && styles.labelDisabled]}>
              {label}
              {required ? <Text style={styles.required}> *</Text> : null}
            </Text>
          )}

          {!!description && (
            <Text
              style={[styles.description, { fontSize: tokens.descriptionSize }, disabled && styles.descriptionDisabled]}
            >
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
  row: {
    minHeight: 52,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  rowDisabled: {
    opacity: 0.6,
  },
  rowError: {
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  textBlock: {
    flex: 1,
  },
  label: {
    color: '#171717',
    fontWeight: '500',
  },
  labelDisabled: {
    color: '#A3A3A3',
  },
  required: {
    color: '#EF4444',
  },
  description: {
    color: '#737373',
    marginTop: 4,
  },
  descriptionDisabled: {
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
