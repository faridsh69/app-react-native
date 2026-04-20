import { useCallback } from 'react'
import { OptionValueType } from '@/core/types/core.types'
import { Controller } from 'react-hook-form'

import { Chip } from '../../Chip/Chip'
import { ErrorWrapper } from '../ErrorWrapper'
import type { InputControllerProps } from '../Form.types'

export const ChipsController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options, ...rest } = props

  const handleChange = useCallback(
    (checkeds: OptionValueType[], onChange: (checkeds: OptionValueType[]) => void) => {
      onChange(checkeds)
      onChangeInput?.({ [name]: checkeds })
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
            <Chip
              // value={value || []}
              // onChange={checkeds => handleChange(checkeds, onChange)}
              // options={options}
              // hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
