import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Image } from '../Image/Image'
import { IMAGE_URLS } from '../Image/Image.constants'
import { ImageProps } from '../Image/Image.types'
import { Story } from './Story'
import { codeTextStyle } from './story.style'

const bigSizeImage =
  'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?cs=srgb&dl=pexels-dominikagregus-672532.jpg&fm=jpg'

export const ImageStory: React.FC = () => {
  const propsArray: ImageProps[] = []
  for (const src of [bigSizeImage, IMAGE_URLS.trash, IMAGE_URLS.ok]) {
    propsArray.push({
      src,
      height: 150,
      keepRatio: true,
    })
  }

  return (
    <Story>
      <Text style={styles.h4}>9) Image</Text>
      <Text style={codeTextStyle.inline}>&lt;Image src=&#123;IMAGE_URLS.trash&#125; /&gt;</Text>
      <Text style={styles.small}>
        Load image with default skeleton before image is loaded (cached loads skip fade).
      </Text>

      <View style={[styles.image]}>
        {propsArray.map((props, index) => (
          <View key={index} style={{ width: 100 }}>
            <Image alt='big size image' {...props} />
          </View>
        ))}
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6, marginBottom: 8 },
  image: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
})
