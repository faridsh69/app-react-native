import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { AppTextInput } from '../../TextInput/TextInput'
import { ErrorWrapper } from '../ErrorWrapper'
import type { InputControllerProps } from '../Form.types'

export const DateController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, ...rest } = props

  const handleChange = useCallback(
    (date: string, onChange: (value: string) => void) => {
      onChange(date)
      onChangeInput?.({ [name]: date })
    },
    [onChangeInput, name],
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <AppTextInput
              value={value}
              // type='date'
              onChange={(date: any) => handleChange(date, onChange)}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
