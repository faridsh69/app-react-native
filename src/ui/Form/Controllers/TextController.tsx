import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { AppTextInput } from '../../TextInput/TextInput'
import { ErrorWrapper } from '../ErrorWrapper'
import type { InputControllerProps } from '../Form.types'

export const TextController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, ...rest } = props

  const handleChange = useCallback(
    (value: string, onChange: (val: string | number) => void) => {
      onChange(value)
      onChangeInput?.({ [name]: value })
    },
    [onChangeInput, name],
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <AppTextInput
              value={value || ''}
              onChangeText={value => handleChange(value, onChange)}
              onBlur={onBlur}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
