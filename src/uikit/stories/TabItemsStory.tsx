import React, { useState } from 'react'
import { DirectionsEnum } from '@/ui/enums'
import { codeTextStyle } from '@/ui/Stories/story.style'
import { StyleSheet, Text, View } from 'react-native'

import { TabItems } from '../TabItems/TabItems'
import { Story } from './Story'

export const TabItemsStory: React.FC = () => {
  const [value, setValue] = useState<any>(1)

  return (
    <Story>
      <Text style={styles.h4}>13) TabItems</Text>
      <Text style={styles.small}>
        TabItems is a list of tabs that can be triggered. It accepts options, value and onChange.
      </Text>

      <Text style={codeTextStyle.inline}>
        {'<TabItems options={[{ value: 1, label: "Latest activity" }]} value={1} onChange={setValue} />'}
      </Text>

      {/* Horizontal (scrollable like web overflow-x) */}
      <View style={styles.section}>
        <TabItems
          value={value}
          onChange={setValue}
          direction={DirectionsEnum.Horizontal}
          title='Horizontal'
          options={[
            { label: 'Latest activity', value: 1 },
            { label: 'My feed', value: 2 },
            { label: 'Notifications', value: 3, badge: 1 },
          ]}
        />
      </View>

      {/* Vertical with title (parity with web) */}
      <View style={styles.section}>
        <TabItems
          value={value}
          onChange={setValue}
          direction={DirectionsEnum.Vertical}
          title='Vertical'
          options={[
            { label: 'Latest activity', value: 1 },
            { label: 'My feed', value: 2 },
            { label: 'Notifications', value: 3, badge: 1 },
          ]}
        />
      </View>

      {/* Disabled + badge showcase */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Disabled & Badge</Text>
        <TabItems
          value={value}
          onChange={setValue}
          direction={DirectionsEnum.Horizontal}
          options={[
            { label: 'Enabled', value: 'a' },
            { label: 'Disabled', value: 'b', disabled: true },
            { label: 'With badge', value: 'c', badge: 7 },
          ]}
        />
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },

  section: { marginTop: 16, gap: 8 },
  sectionTitle: { fontSize: 14, fontWeight: '600', opacity: 0.85 },
})
