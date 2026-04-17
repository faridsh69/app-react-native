import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Checkbox } from '../Checkbox/Checkbox'
import { Story } from './Story'
import { codeTextStyle } from './story.style'

export const CheckboxStory: React.FC = () => {
  const [checked, setChecked] = useState(false)
  const [checkedHint, setCheckedHint] = useState(true)

  return (
    <Story>
      <Text style={styles.h4}>4) Checkbox</Text>
      <Text style={styles.small}>Checkbox supports label, required, hint, disabled, and error states.</Text>

      <Text style={codeTextStyle.inline}>{'<Checkbox label="One" checked={checked} onChange={setChecked} />'}</Text>

      <View style={styles.row}>
        <View style={styles.cell}>
          <Checkbox label='One' checked={checked} onChange={setChecked} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Disabled</Text>
        <Checkbox label='Disabled' checked={true} disabled />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Required + hint</Text>
        <Checkbox
          label='Subscribe'
          required
          hint='You must agree to terms'
          checked={checkedHint}
          onChange={setCheckedHint}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Error</Text>
        <Checkbox label='Invalid' hasError />
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
  row: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
    marginTop: 16,
  },
  cell: { flex: 1, minWidth: 140 },
  section: { marginTop: 16, gap: 8 },
  sectionTitle: { fontSize: 14, fontWeight: '600', opacity: 0.85 },
})
