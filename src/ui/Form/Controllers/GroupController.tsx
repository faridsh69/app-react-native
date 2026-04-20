import { useCallback } from 'react'
import { useFieldArray } from 'react-hook-form'

import { Button } from '../../Button/Button'
import { IconsEnum, SizesEnum, VariantsEnum } from '../../theme/themeEnums'
import { getInputController } from '../Form.helpers'
import { formStyles, getColumnStyle } from '../Form.styles'
import { InputControllerProps } from '../Form.types'

export const GroupController = (props: InputControllerProps) => {
  const {
    control,
    onChangeInput,
    name: groupName,
    inputs = [],
    label = 'Add new item',
    noItemsLabel = 'No item added yet.',
    disabled = false,
    hiddenInputLabelsBasedOnIndex,
    errors,
  } = props

  const { fields, append, remove } = useFieldArray({
    control,
    name: groupName,
  })

  const handleAddRow = () => {
    append({})
    onChangeInput?.({ [groupName]: 'new_field_added' })
  }

  const handleRemoveRow = (rowIndex: number) => {
    remove(rowIndex)
    onChangeInput?.({ [groupName]: rowIndex })
  }

  const hideInput = useCallback(
    (input: any, fieldIndex: number) => {
      if (!hiddenInputLabelsBasedOnIndex) return false

      const hiddenInputLabels = hiddenInputLabelsBasedOnIndex(fieldIndex)

      return hiddenInputLabels.includes(input.label)
    },
    [hiddenInputLabelsBasedOnIndex],
  )
  const rootErrorMessage = errors?.[groupName]?.root?.message

  const showActionButtons = !disabled

  return (
    <div style={formStyles.groupsWrapper}>
      <div style={formStyles.groups}>
        {!fields.length && (
          <div style={formStyles.noItems}>
            <span>{noItemsLabel}</span>
          </div>
        )}
        {fields.map((_, fieldIndex) => {
          return (
            <div style={formStyles.group} key={fieldIndex}>
              <div style={{ ...formStyles.groupInputs, ...formStyles.row }}>
                {inputs.map(input => {
                  const { name, columns = 12, component, ...rest } = input
                  if (hideInput(input, fieldIndex)) return null

                  const InputController = getInputController(component)
                  const inputName = `${groupName}.${fieldIndex}.${name}`

                  return (
                    <div key={inputName} style={getColumnStyle(columns)}>
                      <InputController
                        name={inputName}
                        control={control}
                        onChangeInput={onChangeInput}
                        {...rest}
                      />
                    </div>
                  )
                })}
              </div>
              {showActionButtons && (
                <Button
                  onPress={() => handleRemoveRow(fieldIndex)}
                  iconRight={IconsEnum.CloseBold}
                  variant={VariantsEnum.Text}
                  size={SizesEnum.S}
                />
              )}
            </div>
          )
        })}
      </div>
      <span style={formStyles.hasError}>{rootErrorMessage}</span>
      {showActionButtons && (
        <div>
          <Button label={'+ ' + label} onPress={handleAddRow} size={SizesEnum.S} />
        </div>
      )}
    </div>
  )
}
