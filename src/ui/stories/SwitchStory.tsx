import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { AppSwitch } from '../Switch/Switch'

export default function SwitchStoriesScreen() {
  const [a, setA] = useState(true)
  const [b, setB] = useState(false)
  const [c, setC] = useState(true)

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 24 }}>
      <AppSwitch label='Notifications' description='Receive updates and alerts' value={a} onChange={setA} />

      <AppSwitch label='Biometric login' description='Use Face ID to sign in' value={b} onChange={setB} size='sm' />

      <AppSwitch label='Required setting' value={c} onChange={setC} required />

      <AppSwitch label='Disabled' description='Cannot be changed right now' value onChange={() => {}} disabled />

      <AppSwitch label='Error state' value={false} onChange={() => {}} hasError errorText='This field has an error' />
    </ScrollView>
  )
}
