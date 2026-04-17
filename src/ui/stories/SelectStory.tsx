import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native'

import { AppSelect } from '../Select/Select'

const countryOptions = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
]

export const SelectStory = () => {
  const [country, setCountry] = useState<string | null>(null)
  const [countryError, setCountryError] = useState<string | null>(null)

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 20 }}>
      <AppSelect
        label='Country'
        placeholder='Choose country'
        value={country}
        onChange={val => {
          setCountry(val)
          if (!val) {
            setCountryError('Please select a country')
          } else {
            setCountryError(null)
          }
        }}
        options={countryOptions}
        leftIcon={<Ionicons name='globe-outline' size={20} color='#A3A3A3' />}
      />

      <AppSelect
        label='Clearable select'
        placeholder='Select item'
        value={country}
        onChange={setCountry}
        options={countryOptions}
        clearable
      />

      <AppSelect
        label='Error select'
        placeholder='Select country'
        value={country}
        onChange={setCountry}
        options={countryOptions}
        hasError={!!countryError}
        errorText={countryError ?? ''}
      />

      <AppSelect
        label='Disabled'
        placeholder='Disabled select'
        value={null}
        onChange={() => {}}
        options={countryOptions}
        disabled
      />
    </ScrollView>
  )
}
