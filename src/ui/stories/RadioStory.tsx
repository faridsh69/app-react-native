import React, { useState } from 'react'
import { View } from 'react-native'

import { RadioList } from '../Radio/Radio'

export const RadioListStory = () => {
  const [value, setValue] = useState('2')

  return (
    <View style={{ padding: 16 }}>
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
  )
}
