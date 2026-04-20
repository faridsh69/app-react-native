import * as yup from 'yup'

import { FormSchemaType } from './Form.types'

export const SCHEMAS = {
  wrapper: yup.object,
  requiredString: yup.string().required(),
  requiredNumber: yup.number().required(),
  mixed: (stringsArray: string[]) => yup.mixed().oneOf(stringsArray).required(),
  email: yup.string().email().required(),
  optionalEmail: yup
    .string()
    .nullable()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .email(),
}

export const LOGIN_SCHEMA: FormSchemaType = SCHEMAS.wrapper({
  email: SCHEMAS.email,
})

export const validateFormData = async (schema: any, obj: any) => {
  try {
    await schema.validate(obj)
    return true
  } catch {
    return false
  }
}
