import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { Button } from '../Button/Button'
import { Dialog } from '../Dialog/Dialog'
import { VariantsEnum } from '../theme/themeEnums'

export const DialogStory = () => {
  const [defaultOpen, setDefaultOpen] = useState(false)
  const [smallOpen, setSmallOpen] = useState(false)
  const [scrollOpen, setScrollOpen] = useState(false)

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <Button label='Open default modal' onPress={() => setDefaultOpen(true)} />
      <Button label='Open small modal' onPress={() => setSmallOpen(true)} />
      <Button label='Open scrollable modal' onPress={() => setScrollOpen(true)} />

      <Dialog
        visible={defaultOpen}
        onClose={() => setDefaultOpen(false)}
        title='Default modal'
        description='Simple centered modal'
        footer={
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <View style={{ flex: 1 }}>
              <Button label='Cancel' variant={VariantsEnum.Secondary} onPress={() => setDefaultOpen(false)} />
            </View>
            <View style={{ flex: 1 }}>
              <Button label='Save' onPress={() => setDefaultOpen(false)} />
            </View>
          </View>
        }
      >
        <Text style={{ fontSize: 15, lineHeight: 22, color: '#171717' }}>This is the default modal body.</Text>
      </Dialog>

      <Dialog
        visible={smallOpen}
        onClose={() => setSmallOpen(false)}
        title='Small modal'
        size='sm'
        footer={<Button label='Close' onPress={() => setSmallOpen(false)} />}
      >
        <Text style={{ fontSize: 15, lineHeight: 22, color: '#171717' }}>Compact modal for small confirmations.</Text>
      </Dialog>

      <Dialog
        visible={scrollOpen}
        onClose={() => setScrollOpen(false)}
        title='Scrollable modal'
        scrollable
        footer={<Button label='Done' onPress={() => setScrollOpen(false)} />}
      >
        <Text style={{ fontSize: 15, lineHeight: 22, color: '#171717' }}>
          {Array.from({ length: 25 })
            .map((_, i) => `Item ${i + 1}: Lorem ipsum dolor sit amet.`)
            .join('\n\n')}
        </Text>
      </Dialog>
    </ScrollView>
  )
}
