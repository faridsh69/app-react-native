import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { Textarea } from '../../Textarea/Textarea'
import { ErrorWrapper } from '../ErrorWrapper'
import type { InputControllerProps } from '../Form.types'

export const TextareaController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, ...rest } = props

  const handleChange = useCallback(
    (value: string, onChange: (value: string) => void) => {
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
            <Textarea
              name={name}
              value={value}
              onChange={value => handleChange(value, onChange)}
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
