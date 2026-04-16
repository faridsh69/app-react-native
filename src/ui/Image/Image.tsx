import React, { useState } from 'react'

import { StyleSheet, View } from 'react-native'

import { Image as ExpoImage, ImageSource } from 'expo-image'

import { IMAGE_STATES, MINIMUM_TIME_FOR_SHOW_ANIMATION } from './Image.constants'
import { styles } from './Image.styles'
import { ImageProps } from './Image.types'

export const Image = (props: ImageProps) => {
  const {
    src,
    alt = 'image',
    width,
    height,
    borderRadius = 0,
    keepRatio = true,
    aspectRatio = 1,
  } = props

  const [imageState, setImageState] = useState(IMAGE_STATES.loading)
  const [mountingTime] = useState(Date.now())

  const handleLoadImage = () => {
    const loadedTime = new Date().getTime() - mountingTime

    if (loadedTime < MINIMUM_TIME_FOR_SHOW_ANIMATION) {
      setImageState(IMAGE_STATES.cached)
      return
    }

    setImageState(IMAGE_STATES.loaded)
  }
  const source: ImageSource = typeof src === 'string' ? { uri: src } : src
  const transition = imageState === IMAGE_STATES.cached ? 0 : 400
  const contentFit = keepRatio ? 'contain' : 'fill'

  const sizeStyle = [
    width == null || width === '100%' ? { alignSelf: 'stretch' } : { width },

    height != null ? { height } : { aspectRatio },
  ]

  const containerStyle: any = [styles.container, { borderRadius }, ...sizeStyle]

  const imageStyles: any = [
    imageState === IMAGE_STATES.loading && styles.loading,
    StyleSheet.absoluteFillObject,
  ]

  return (
    <View style={[containerStyle]} accessible accessibilityLabel={alt}>
      {imageState === IMAGE_STATES.loading && <View style={styles.skeleton} />}
      <ExpoImage
        source={source}
        onLoadEnd={handleLoadImage}
        contentFit={contentFit}
        transition={transition}
        style={imageStyles}
      />
    </View>
  )
}
