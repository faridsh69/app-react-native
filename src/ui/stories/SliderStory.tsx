import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MainSlider } from '../MainSlider/MainSlider'
import { Story } from './Story'
import { codeTextStyle } from './story.style'

export const SliderStory: React.FC = () => {
  const image1 = require('./extra/images/1.png')
  const image2 = require('./extra/images/2.png')
  const image3 = require('./extra/images/3.png')

  const productCards /* : Option[] */ = [
    { label: 'A hidden gem from Marche—what’s your pick?', src: image1 },
    { label: 'I’m looking for a great Pinot Blanc', src: image2 },
    { label: 'What’s the best wine for grilled salmon?', src: image3 },
    { label: 'A hidden gem from Marche—what’s your pick? 1', src: image1 },
    { label: 'I’m looking for a great Pinot Blanc 1', src: image2 },
    { label: 'What’s the best wine for grilled salmon? 1', src: image3 },
    { label: 'A hidden gem from Marche—what’s your pick? 2', src: image1 },
    { label: 'I’m looking for a great Pinot Blanc 2', src: image2 },
    { label: 'What’s the best wine for grilled salmon? 2', src: image3 },
  ]

  return (
    <Story>
      <Text style={styles.h4}> Slider</Text>

      <Text style={styles.small}>Slider will render the component and options</Text>

      <Text style={codeTextStyle.inline}>{'<Slider label="Add photo" options={productCards} />'}</Text>

      <View style={styles.section}>
        <MainSlider options={productCards} />
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
    flexDirection: 'row',
  },
})
