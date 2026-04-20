import { getFirstLetterUpperCases } from '@/core/helpers/string.helpers'

import { Label } from '../Label/Label'
import { FontsEnum } from '../theme/themeEnums'
import type { inputWrapperProps } from './Form.types'
import styles from './Form.module.scss'

export const ErrorWrapper = (props: inputWrapperProps) => {
  const { children, error } = props

  const errorMessage = getFirstLetterUpperCases(error?.message as string).replace('_', ' ')

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputComponent}>{children}</div>
      <div className={styles.errorWrapper}>
        <Label label={errorMessage} font={FontsEnum.Text12} hasError />
      </div>
    </div>
  )
}
