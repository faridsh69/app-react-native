import React from 'react'

import { Text, View } from 'react-native'

import { styles } from './Textarea.styles'
import { CharacterCounterProps } from './Textarea.types'

export const CharacterCounter = (props: CharacterCounterProps) => {
  const { valueLength = 0, min, max, invalidLength = false } = props

  if (!min && !max) return null

  return (
    <View style={styles.counter}>
      <Text style={[styles.counterText, styles.count, invalidLength && styles.inValid]}>
        {valueLength}
      </Text>
      <Text style={[styles.counterText, styles.limit]}>/{max ?? '—'}</Text>
    </View>
  )
}
