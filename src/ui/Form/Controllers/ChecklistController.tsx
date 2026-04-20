import { Controller } from 'react-hook-form'

import { Checkbox } from '../../Checkbox/Checkbox'
import { ErrorWrapper } from '../ErrorWrapper'
import type { InputControllerProps } from '../Form.types'

export const ChecklistController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options, ...rest } = props

  // const handleChange = useCallback(
  //   (checkeds: OptionValueType[], onChange: (checkeds: OptionValueType[]) => void) => {
  //     onChange(checkeds)
  //     onChangeInput?.({ [name]: checkeds })
  //   },
  //   [onChangeInput, name],
  // )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <Checkbox
              // value={value || []}
              // onChange={checkeds => handleChange(checkeds, onChange)}
              // options={options}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
