import React from 'react'
import { SizesEnum } from '@/ui/enums'
import { StyleSheet, Text, View } from 'react-native'

import { Loader } from '../Loader/Loader'
import { Story } from './Story'

export const LoaderStory: React.FC = () => {
  return (
    <Story>
      <Text style={styles.h4}>26) Loader</Text>

      <View style={styles.section}>
        <Loader size={SizesEnum.S} label='Loading' />
      </View>

      <View style={styles.section}>
        <Loader size={SizesEnum.M} />
      </View>

      <View style={styles.section}>
        <Loader size={SizesEnum.L} />
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  section: {
    marginTop: 16,
    alignItems: 'center',
    gap: 12,
  },
})
