import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native'

import { AppTextInput } from '../TextInput/TextInput'

export const TextInputStory = () => {
  const [price, setPrice] = useState('')
  const [search, setSearch] = useState('')
  const [clearableValue, setClearableValue] = useState('Value')
  const [password, setPassword] = useState('')
  const [copyValue, setCopyValue] = useState('')
  const [errorValue, setErrorValue] = useState('')
  const [focusedDark, setFocusedDark] = useState('Value')

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 20 }}>
      <AppTextInput
        label='With unit'
        value={price}
        onChangeText={setPrice}
        placeholder='Enter amount'
        keyboardType='numeric'
        unit='$'
      />

      <AppTextInput
        label='With Icon'
        value={search}
        onChangeText={setSearch}
        placeholder='Search'
        leftIcon={<Ionicons name='search-outline' size={20} color='#A3A3A3' />}
      />

      <AppTextInput label='clearable' value={clearableValue} onChangeText={setClearableValue} clearable />

      <AppTextInput
        label='hideable'
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        passwordToggle
      />

      <AppTextInput label='copyable' value={copyValue} onChangeText={setCopyValue} copyable />

      <AppTextInput
        value={focusedDark}
        onChangeText={setFocusedDark}
        leftIcon={<Ionicons name='search-outline' size={20} color='#D4D4D8' />}
      />

      <AppTextInput
        label='hasError'
        value={errorValue}
        onChangeText={setErrorValue}
        hasError
        errorText='Wrong password'
      />

      <AppTextInput label='disabled' value='' onChangeText={() => {}} placeholder='Disabled input' disabled />

      <AppTextInput placeholder='With placeholder' />
    </ScrollView>
  )
}
