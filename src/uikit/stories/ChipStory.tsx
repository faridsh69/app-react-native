import React, { useState } from 'react'
import { IconsEnum, SizesEnum } from '@/ui/enums'
import { codeTextStyle } from '@/ui/Stories/story.style'
import { StyleSheet, Text, View } from 'react-native'

import { Chip } from '../Chip/Chip'
import { Story } from './Story'

export const ChipStory: React.FC = () => {
  const sizes = [SizesEnum.M, SizesEnum.S]

  const [closableSizes, setClosableSizes] = useState<SizesEnum[]>([SizesEnum.M, SizesEnum.S])
  const handleClose = (size: SizesEnum) => setClosableSizes(prev => prev.filter(s => s !== size))

  return (
    <Story>
      <Text style={styles.h4}>18) Chip</Text>

      <Text style={styles.small}>We have two size s, m, also can have onClose, and icon beside label</Text>

      <Text style={codeTextStyle.inline}>{'<Chip label="chip" size={SizesEnum.M} />'}</Text>

      {/* Row: just sizes */}
      <View style={styles.row}>
        {sizes.map(size => (
          <Chip key={`plain-${size}`} label='Red' size={size} />
        ))}
      </View>

      {/* Row: with icon and close (and color) */}
      <View style={styles.row}>
        {closableSizes.map(size => (
          <Chip
            key={`closable-${size}`}
            label='with icon and close'
            size={size}
            icon={IconsEnum.ArrowRight}
            onClose={() => handleClose(size)}
          />
        ))}
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
  row: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
})
