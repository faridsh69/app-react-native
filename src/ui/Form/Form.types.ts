import type { ChangeEventHandler, FC, InputHTMLAttributes, ReactNode } from 'react'
import { OptionValueType } from '@/core/types/core.types'
import type { Control, FieldError } from 'react-hook-form'
import type * as yup from 'yup'

import { RadioListProps } from '../Radio/Radio'
import { RatingProps } from '../Rating/Rating.types'
import { AppSelectProps } from '../Select/Select'
import { TextareaProps } from '../Textarea/Textarea.types'
import { AppTextInputProps } from '../TextInput/TextInput'
import { IconsEnum, SizesEnum, VariantsEnum } from '../theme/themeEnums'
import type { InputComponentsEnum } from './Form.enums'

type CommonInputProps = {
  name: string
  label?: string
  columns?: number
  unit?: string
  hint?: string
  variant?: VariantsEnum
  handleChangeSearch?: (query: string) => void
}

type DatepickerProps = InputHTMLAttributes<HTMLInputElement>

export type CheckboxProps = {
  checked?: boolean
  linesCount?: number
  size?: SizesEnum
  onChange?: ChangeEventHandler<HTMLInputElement>
  label?: string
}

export type OptionType = {
  label: string
  value: OptionValueType
}

type CustomProps = {
  ControllerComponent: FC<InputControllerProps>
}

type GroupProps = {
  inputs: FormInput[]
  noItemsLabel?: string
  disabled?: boolean
  hiddenInputLabelsBasedOnIndex?: (index: number) => string[]
}

export type FormInput =
  | ({ component: InputComponentsEnum.Text } & CommonInputProps &
      AppTextInputProps & {
        icon?: IconsEnum
        debounceTime?: number
        size?: SizesEnum
      })
  | ({ component: InputComponentsEnum.Checkbox } & CommonInputProps & CheckboxProps)
  | ({ component: InputComponentsEnum.Checklist } & CommonInputProps & CheckboxProps)
  | ({ component: InputComponentsEnum.Chips } & CommonInputProps & CheckboxProps)
  | ({ component: InputComponentsEnum.RadioList } & CommonInputProps & RadioListProps)
  | ({ component: InputComponentsEnum.Toggle } & CommonInputProps)
  | ({ component: InputComponentsEnum.Textarea } & CommonInputProps & TextareaProps)
  | ({ component: InputComponentsEnum.Select } & CommonInputProps & AppSelectProps)
  | ({ component: InputComponentsEnum.Date } & CommonInputProps & DatepickerProps)
  | ({ component: InputComponentsEnum.Rating } & CommonInputProps & RatingProps)
  | ({ component: InputComponentsEnum.Group } & CommonInputProps & GroupProps)
  | ({ component: InputComponentsEnum.Uploader } & CommonInputProps)
  | ({ component: InputComponentsEnum.Custom } & CommonInputProps & CustomProps)
  | ({ component: InputComponentsEnum.Editor } & CommonInputProps)

export type FormSchemaType = yup.ObjectSchema<any>

export type FormProps = {
  inputs: FormInput[]
  values?: any
  defaultValues?: any
  onChangeInput?: (formData: any, changedInput: any) => void
  schema?: FormSchemaType
  showValidationBar?: boolean
  showErrorOnMount?: boolean
  setIsValid?: (isValid: boolean) => void
}

export type inputWrapperProps = {
  children: ReactNode
  error?: FieldError
}

export type InputControllerProps = {
  control: Control<any>
  name: string
  onChangeInput?: (changedInput: object) => void
  label?: string
  options?: OptionType[]
  multiple?: boolean
  inputs?: FormInput[]
  disabled?: boolean
  ControllerComponent?: FC<InputControllerProps>
  hiddenInputLabelsBasedOnIndex?: (index: number) => string[]
  noItemsLabel?: string
  errors?: any
  fieldName?: string
  checkPathInBreadcrumb?: boolean
  arrowButtonPath?: string
  breadCrumbOptions?: any
  handleChangeSearch?: (query: string) => void
  debounceTime?: number
}
