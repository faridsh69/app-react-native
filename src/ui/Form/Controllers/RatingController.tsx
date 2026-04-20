import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { Rating } from '../../Rating/Rating'
import { ErrorWrapper } from '../ErrorWrapper'
import type { InputControllerProps } from '../Form.types'

export const RatingController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, ...rest } = props

  const handleChange = useCallback(
    (value: number, onChange: (v: number) => void) => {
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
            <Rating value={value} onChange={value => handleChange(value, onChange)} {...rest} />
          </ErrorWrapper>
        )
      }}
    />
  )
}
