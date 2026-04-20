import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import { Popup } from '../Popup/Popup'
import { ColorsEnum, FontsEnum, TextAlignEnum, VariantsEnum } from '../theme/themeEnums'
import { Story } from './Story'
import { codeTextStyle } from './story.style'

export const PopupStory = () => {
  const [modal, setModal] = useState<'Login' | 'Register' | ''>('')

  const commonProps = {
    width: 450,
    setIsOpen: () => setModal(''),
    closeOnClickOutside: true,
    bodyPadding: true,
  } as const

  return (
    <Story>
      <Text style={styles.h4}>Modal</Text>
      <Text style={styles.small}>
        We have modal with 2 sizes S and M, it has title, body and footer
      </Text>
      <Text style={codeTextStyle.inline}>
        {
          '<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Modal Title" body={<View>Modal Body</View>} />'
        }
      </Text>

      <View style={styles.actionsRow}>
        <Button onPress={() => setModal('Login')} label='Open Modal Login' />
        <Button onPress={() => setModal('Register')} label='Open Modal Register' />
      </View>

      {/* Login Modal */}
      <Popup
        isOpen={modal === 'Login'}
        title='Login to save your favorite wines'
        variant={VariantsEnum.Secondary}
        {...commonProps}
        body={
          <View style={{ gap: 36 }}>
            <Label
              font={FontsEnum.Text16}
              linesCount={3}
              textAlign={TextAlignEnum.Center}
              label='Get started by entering your email. We’ll check to see if you have an account with us.'
            />
          </View>
        }
        actions={
          <View style={{ gap: 10 }}>
            <Button label='Continue with Email' />
            <Text style={styles.or}>or</Text>
            <Button label='Continue with Gmail' variant={VariantsEnum.Secondary} />
          </View>
        }
      />

      {/* Register Modal */}
      <Popup
        isOpen={modal === 'Register'}
        title='Create a new account'
        variant={VariantsEnum.Secondary}
        {...commonProps}
        body={
          <View style={{ gap: 16 }}>
            <Label
              font={FontsEnum.Text16}
              linesCount={3}
              textAlign={TextAlignEnum.Center}
              label='Welcome to VinoVoss! You must be of legal drinking age to create an account.'
            />
            <TextInput placeholder='Name' />
            <TextInput placeholder='Email address' />
          </View>
        }
        actions={
          <View style={styles.registerActions}>
            <Button label='Create an account' width={'100%'} />
            <Label
              font={FontsEnum.Text12}
              label='By creating an account, you agree to the VinoVoss'
              textAlign={TextAlignEnum.Center}
              color={ColorsEnum.Grey600}
            />
            <Label
              font={FontsEnum.Text12}
              label=' Terms of Use, Privacy Policy & Content Policy'
              textAlign={TextAlignEnum.Center}
            />
          </View>
        }
      />
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
  actionsRow: { marginTop: 12, flexDirection: 'row', gap: 12, flexWrap: 'wrap' },
  or: { textAlign: 'center', marginVertical: 4, opacity: 0.7 },
  registerActions: { gap: 10, alignItems: 'center', width: '100%' },
})
