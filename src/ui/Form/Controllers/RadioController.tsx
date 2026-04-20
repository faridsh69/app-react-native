import { useCallback } from 'react'
import { OptionValueType } from '@/core/types/core.types'
import { Controller } from 'react-hook-form'

import { RadioList } from '../../Radio/Radio'
import { ErrorWrapper } from '../ErrorWrapper'
import type { InputControllerProps } from '../Form.types'

export const RadioController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options, ...rest } = props

  const handleChange = useCallback(
    (value: OptionValueType, onChange: (value: OptionValueType) => void) => {
      onChange(value)
      onChangeInput?.({ [name]: value })
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
            <RadioList
              value={value}
              onChange={value => handleChange(value, onChange)}
              options={options as any}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
