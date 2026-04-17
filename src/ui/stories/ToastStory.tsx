import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from '../Button/Button'
import { IconsEnum, VariantsEnum } from '../theme/themeEnums'
import { toastError, toastSuccess, toastWarning } from '../Toast/Toast'
import { Story } from './Story'
import { codeTextStyle } from './story.style'

export const ToastStory: React.FC = () => {
  return (
    <Story>
      <Text style={styles.h4}>Toast</Text>
      <Text style={styles.small}>We can render messages via toast</Text>

      <Text style={codeTextStyle.inline}>
        {'toastSuccess({ title: "Success", description: "Your product added to basket successfully" })'}
      </Text>

      <View style={styles.section}>
        <Button
          label='Success'
          iconLeft={IconsEnum.Success}
          variant={VariantsEnum.Secondary}
          onClick={() =>
            toastSuccess({
              title: 'Success',
              description: 'Your product added to basket successfully',
            })
          }
        />

        <Button
          label='Warning'
          iconLeft={IconsEnum.Warning}
          variant={VariantsEnum.Secondary}
          onClick={() =>
            toastWarning({
              title: 'Warning',
              description: 'Your data didn’t save.',
            })
          }
        />

        <Button
          label='Danger'
          iconLeft={IconsEnum.Error}
          variant={VariantsEnum.Secondary}
          onClick={() =>
            toastError({
              title: 'Danger',
              description: 'Your username or password is wrong.',
            })
          }
        />
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
  section: {
    marginTop: 16,
    alignItems: 'flex-start',
    gap: 12,
    width: 300,
  },
})
