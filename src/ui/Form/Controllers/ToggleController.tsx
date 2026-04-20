import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { AppSwitch } from '../../Switch/Switch'
import { ErrorWrapper } from '../ErrorWrapper'
import type { InputControllerProps } from '../Form.types'

export const ToggleController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, ...rest } = props

  const handleChange = useCallback(
    (checked: boolean, onChange: (checkeds: boolean) => void) => {
      onChange(checked)
      onChangeInput?.({ [name]: checked })
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
            <AppSwitch
              value={!!value}
              onChange={checked => handleChange(checked, onChange)}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
