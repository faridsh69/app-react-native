import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Label } from '../Label/Label'
import { ColorsEnum, FontsEnum } from '../theme/enums'
import { codeTextStyle } from '../theme/story.style'
import { Story } from './Story'

export const LabelStory: React.FC = () => {
  const fontEntries = Object.entries(FontsEnum)
  const colorEntries = Object.entries(ColorsEnum)

  return (
    <Story>
      <Text style={styles.h4}>2) Label, Tooltip</Text>

      <Text style={styles.small}>
        For all places we need to render text, only we should use this label component and add it proper font and color
        from props. Injecting any type of classname or style is forbidden. It will wrap the text and show tooltip if the
        label text space is not enough.
      </Text>

      <Text style={codeTextStyle.inline}>
        {'<Label label="label" font={FontsEnum.Label16} color={ColorsEnum.Primary} />'}
      </Text>

      <Text style={styles.h4}>Fonts</Text>
      <View style={styles.listCol}>
        {fontEntries.map(([name, style]) => (
          <Label label={`${name} - Label`} font={style} key={`font-${name}`} />
        ))}
      </View>
      <View style={styles.divider} />

      <Text style={styles.h4}>Truncate Text</Text>
      <View style={styles.truncateWrapper}>
        <Label label='11111111111111111 22222222222222 33333333333333' linesCount={1} />
      </View>
      <View style={styles.divider} />

      <Text style={styles.h4}>Colors</Text>
      <View style={styles.listCol}>
        {colorEntries.map(([name, color]) => (
          <Label label={`${name} - Color`} color={String(color)} key={`color-${name}`} />
        ))}
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
  listCol: { flexDirection: 'column', gap: 10 },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: '#D1D5DB', marginVertical: 8 },
  truncateWrapper: { width: 200 },
})
