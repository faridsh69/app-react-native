import React, { useState } from 'react'
import { TextInput, View } from 'react-native'

import { Label } from '../Label/Label'
import { FontsEnum, PlacementsEnum } from '../theme/themeEnums'
import { CharacterCounter } from './CharacterCounter'
import { SIZE_MAP_TEXTAREA, TextareaSizes } from './Textarea.enums'
import { styles } from './Textarea.styles'
import { TextareaProps } from './Textarea.types'

export const Textarea = (props: TextareaProps) => {
  const {
    name,
    value = '',
    onChange,
    onBlur,
    label,
    disabled = false,
    size = TextareaSizes.M,
    required,
    hasError,
    hint,
    hintZIndex,
    min = 0,
    max,
    width,
    placeholder,
    isResizable = false,
    errorText,
    numberOfLines,
    ...textareaProps
  } = props

  const [focused, setFocused] = useState(false)

  // @ts-ignore
  const valueLength = value?.trim?.()?.length
  const invalidLength = valueLength < min || (!!max && valueLength > max)
  const invalid = hasError || !!errorText || invalidLength

  const textareaStyle = [
    styles.textarea,
    size && SIZE_MAP_TEXTAREA[size],
    !isResizable && styles.resizeNone,
    disabled && styles.disabled,
    focused && styles.focused,
  ]

  return (
    <View style={[styles.field, { width }]}>
      <Label
        label={label}
        font={FontsEnum.Text14}
        required={required}
        hasError={invalid}
        hint={hint}
        hintZIndex={hintZIndex}
        disabled={disabled}
      />
      <View style={styles.wrapper}>
        <TextInput
          multiline
          numberOfLines={numberOfLines}
          value={value}
          onChangeText={text => onChange?.(text)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false)
            onBlur?.()
          }}
          editable={!disabled}
          placeholder={placeholder}
          textAlignVertical='top'
          style={textareaStyle}
          accessibilityState={{ disabled }}
          // @ts-ignore
          name={name}
          {...textareaProps}
        />
        <CharacterCounter
          valueLength={valueLength}
          invalidLength={invalidLength}
          min={min}
          max={max}
        />
      </View>
      {errorText?.trim() && (
        <Label
          label={errorText}
          hasError
          font={FontsEnum.Text14}
          tooltipPlacement={PlacementsEnum.Bottom}
        />
      )}
    </View>
  )
}
