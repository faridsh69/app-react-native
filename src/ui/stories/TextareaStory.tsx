import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Textarea } from '../Textarea/Textarea'
import { Story } from './Story'
import { codeTextStyle } from './story.style'

export const TextareaStory: React.FC = () => {
  const [value, setValue] = useState('Value')
  const onChange = (e: any) => setValue(e?.target?.value ?? '')
  const onChangeText = (text: string) => setValue(text)

  const props = {
    value,
    onChange,
    onChangeText,
    min: 5,
    max: 100,
    width: 400,
    label: 'Textarea',
    placeholder: 'Textarea',
    numberOfLines: 7, // RN equivalent to web "rows"
  }

  return (
    <Story>
      <Text style={styles.h4}>Textarea</Text>
      <Text style={styles.small}>We have min, max that shows minimum and maximum length of content</Text>
      <Text style={codeTextStyle.inline}>{'<Textarea min={20} max={100} width={400} rows={7} label="label" />'}</Text>

      <View style={styles.section}>
        <Textarea {...props} />
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
  section: {
    marginTop: 16,
    alignItems: 'flex-start',
    gap: 12,
  },
})
