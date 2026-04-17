import React, { useState } from 'react'
import { View } from 'react-native'

import { AppSwitch } from '../Switch/Switch'

export const SwitchStory = () => {
  const [enabled, setEnabled] = useState(true)

  return (
    <View style={{ padding: 16 }}>
      <AppSwitch label='Face ID' description='Use Face ID to unlock the app' value={enabled} onChange={setEnabled} />
    </View>
  )
}
