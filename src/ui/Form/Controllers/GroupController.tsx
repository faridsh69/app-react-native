import { useCallback } from 'react'
import { useFieldArray } from 'react-hook-form'
import { Text, View } from 'react-native'

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
    <View style={formStyles.groupsWrapper}>
      <View style={formStyles.groups}>
        {!fields.length && (
          <View style={formStyles.noItems}>
            <Text>{noItemsLabel}</Text>
          </View>
        )}
        {fields.map((_, fieldIndex) => {
          return (
            <View style={formStyles.group} key={fieldIndex}>
              <View style={{ ...formStyles.groupInputs, ...formStyles.row }}>
                {inputs.map(input => {
                  const { name, columns = 12, component, ...rest } = input
                  if (hideInput(input, fieldIndex)) return null

                  const InputController = getInputController(component)
                  const inputName = `${groupName}.${fieldIndex}.${name}`

                  return (
                    <View key={inputName} style={getColumnStyle(columns)}>
                      <InputController
                        name={inputName}
                        control={control}
                        onChangeInput={onChangeInput}
                        {...rest}
                      />
                    </View>
                  )
                })}
              </View>
              {showActionButtons && (
                <Button
                  onPress={() => handleRemoveRow(fieldIndex)}
                  iconRight={IconsEnum.CloseSmall}
                  variant={VariantsEnum.Text}
                  size={SizesEnum.S}
                />
              )}
            </View>
          )
        })}
      </View>
      <Text style={formStyles.hasError}>{rootErrorMessage}</Text>
      {showActionButtons && (
        <View>
          <Button label={'+ ' + label} onPress={handleAddRow} size={SizesEnum.S} />
        </View>
      )}
    </View>
  )
}
