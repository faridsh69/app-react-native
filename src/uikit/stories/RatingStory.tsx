import React, { useState } from 'react'
import { SizesEnum } from '@/ui/enums'
import { codeTextStyle } from '@/ui/Stories/story.style'
import { StyleSheet, Text, View } from 'react-native'

import { Rating } from '../Rating/Rating'
import { Story } from './Story'

export const RatingStory: React.FC = () => {
  const [value, setValue] = useState(2)

  const baseProps = {
    label: 'Label',
    disabled: false,
    size: SizesEnum.M as const,
    hasError: false,
    hint: '',
    required: false,
  }

  return (
    <Story>
      <Text style={styles.h4}>19) Rating</Text>

      <Text style={styles.small}>We have Rating as a 5 star component for adding review on a wine</Text>

      <Text style={codeTextStyle.inline}>{'<Rating />'}</Text>

      <View style={styles.column}>
        <Rating {...baseProps} label='Rating' value={value} onChange={setValue} size={SizesEnum.L} />

        <Rating {...baseProps} label='Disabled' value={value} onChange={setValue} disabled size={SizesEnum.M} />

        <Rating {...baseProps} label='Small' value={value} onChange={setValue} size={SizesEnum.S} />

        <Text style={styles.helper}>Current value: {value}</Text>
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
  column: { flexDirection: 'column', gap: 10 },
  helper: { marginTop: 8, fontSize: 12, opacity: 0.7 },
})
