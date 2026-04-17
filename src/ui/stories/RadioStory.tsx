import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { RadioList } from '../Radio/Radio'
import { Story } from './Story'

export const RadioListStory = () => {
  const [value, setValue] = useState('2')

  return (
    <Story>
      <Text style={styles.h4}>Radio</Text>

      <View style={styles.section}>
        <RadioList
          label='RadioList'
          value={value}
          onChange={setValue}
          options={[
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
          ]}
        />
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  section: { gap: 12 },
})
