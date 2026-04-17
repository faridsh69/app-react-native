import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { AppSwitch } from '../Switch/Switch'
import { Story } from './Story'

export const SwitchStory = () => {
  const [a, setA] = useState(true)
  const [b, setB] = useState(false)
  const [c, setC] = useState(true)

  return (
    <Story>
      <Text style={styles.h4}>Switch</Text>

      <View style={styles.section}>
        <AppSwitch label='Notifications' description='Receive updates and alerts' value={a} onChange={setA} />
      </View>

      <View style={styles.section}>
        <AppSwitch label='Biometric login' description='Use Face ID to sign in' value={b} onChange={setB} size='sm' />
      </View>

      <View style={styles.section}>
        <AppSwitch label='Required setting' value={c} onChange={setC} required />
      </View>

      <View style={styles.section}>
        <AppSwitch label='Disabled' description='Cannot be changed right now' value onChange={() => {}} disabled />
      </View>

      <View style={styles.section}>
        <AppSwitch label='Error state' value={false} onChange={() => {}} hasError errorText='This field has an error' />
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  section: { gap: 12 },
})
