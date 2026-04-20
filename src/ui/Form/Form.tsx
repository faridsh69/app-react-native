import { useEffect } from 'react'
import { getTitleCase } from '@/core/helpers/string.helpers'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { getInputController } from './Form.helpers'
import { formStyles, getColumnStyle } from './Form.styles'
import type { FormProps } from './Form.types'
import { ValidationBar } from './ValidationBar'

export const Form = (props: FormProps) => {
  const {
    inputs = [],
    values,
    defaultValues,
    onChangeInput: propOnChangeInput,
    schema = undefined,
    setIsValid,
    showValidationBar = false,
    showErrorOnMount = false,
  } = props

  const {
    control,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    mode: 'onChange',
    values,
    defaultValues,
  })

  useEffect(() => {
    setIsValid?.(isValid)
  }, [isValid])

  useEffect(() => {
    if (showErrorOnMount) trigger()
  }, [])

  const onChangeInput = (inputObject: object) => {
    propOnChangeInput?.(watch(), inputObject)
  }

  return (
    <div style={formStyles.form}>
      {schema && showValidationBar && (
        <ValidationBar all={inputs.length} invalids={Object.values(errors).length} />
      )}

      <div style={formStyles.row}>
        {inputs.map(input => {
          const { component, name, columns = 12, label: inputLabel, ...rest } = input

          const InputController = getInputController(component)
          const label = inputLabel === '' ? '' : inputLabel || getTitleCase(name)

          return (
            <div key={input.name} style={getColumnStyle(columns)}>
              <InputController
                control={control}
                name={name}
                key={name}
                label={label}
                onChangeInput={onChangeInput}
                {...rest}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
