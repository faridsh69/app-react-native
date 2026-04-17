import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Icon } from '../Icon/Icon'
import { ColorsEnum, IconsEnum, SizesEnum } from '../theme/themeEnums'
import { Story } from './Story'
import { codeTextStyle } from './story.style'

export const IconsStory = () => {
  const iconEntries = Object.entries(IconsEnum)

  return (
    <Story>
      <Text style={styles.h4}>1) Icons</Text>
      <Text style={styles.small}>
        We should import SVGs into the project via the UI kit. Injecting raw SVG is forbidden.
      </Text>
      <Text style={codeTextStyle.inline}>{'<Icon icon={IconsEnum.ArrowRight} color={ColorsEnum.Primary} />'}</Text>

      <View style={styles.row}>
        {iconEntries.map(([name, value]) => (
          <View key={`icon-${String(name)}`} style={styles.cell}>
            <Icon icon={value} color={ColorsEnum.Error} size={SizesEnum.M} />
            <Text style={styles.iconName} numberOfLines={1} ellipsizeMode='tail'>
              {name}
            </Text>
          </View>
        ))}
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 30,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: 88,
  },
  iconName: {
    fontSize: 12,
    opacity: 0.8,
    textAlign: 'center',
  },
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
})
