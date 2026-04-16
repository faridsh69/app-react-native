import React from 'react'
import { SizesEnum } from '@/ui/enums'
import { codeTextStyle } from '@/ui/Stories/story.style'
import { StyleSheet, Text, View } from 'react-native'

import { Avatar } from '../Avatar/Avatar'
import { Story } from './Story'

export const AvatarsStory: React.FC = () => {
  return (
    <Story>
      <Text style={styles.h4}>16) Avatar</Text>
      <Text style={styles.small}>We have avatar to show user profile picture</Text>
      <Text style={codeTextStyle.inline}>{'<Avatar src="src" />'}</Text>

      <View style={styles.section}>
        <Avatar src={'https://avatars.githubusercontent.com/u/26208914?v=4'} />
      </View>

      <View style={styles.section}>
        <Text style={styles.caption}>Without src (fallback icon)</Text>
        <View style={styles.row}>
          <Avatar />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.caption}>Sizes</Text>
        <View style={styles.row}>
          <Avatar src={'https://avatars.githubusercontent.com/u/26208914?v=4'} size={SizesEnum.S} />
          <Avatar src={'https://avatars.githubusercontent.com/u/26208914?v=4'} size={SizesEnum.M} />
          <Avatar src={'https://avatars.githubusercontent.com/u/26208914?v=4'} size={SizesEnum.L} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.caption}>Custom width (diameter)</Text>
        <View style={styles.row}>
          <Avatar src={'https://avatars.githubusercontent.com/u/26208914?v=4'} width={48} />
          <Avatar src={'https://avatars.githubusercontent.com/u/26208914?v=4'} width={72} />
          <Avatar src={'https://avatars.githubusercontent.com/u/26208914?v=4'} width={96} />
        </View>
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
  caption: { fontSize: 12, opacity: 0.7, marginBottom: 8 },
  section: {
    marginTop: 16,
    alignItems: 'flex-start',
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
})
