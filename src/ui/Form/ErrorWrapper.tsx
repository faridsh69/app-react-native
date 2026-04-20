import { getFirstLetterUpperCases } from '@/core/helpers/string.helpers'

import { Label } from '../Label/Label'
import { FontsEnum } from '../theme/themeEnums'
import { formStyles } from './Form.styles'
import type { inputWrapperProps } from './Form.types'

export const ErrorWrapper = (props: inputWrapperProps) => {
  const { children, error } = props

  const errorMessage = getFirstLetterUpperCases(error?.message as string).replace('_', ' ')

  return (
    <div style={formStyles.inputWrapper}>
      <div style={formStyles.inputComponent}>{children}</div>
      <div style={formStyles.errorWrapper}>
        <Label label={errorMessage} font={FontsEnum.Text12} hasError />
      </div>
    </div>
  )
}
