import React, { useState } from 'react'
import { Image as ExpoImage, ImageSource } from 'expo-image'
import { View } from 'react-native'

import { IMAGE_STATES, MINIMUM_TIME_FOR_SHOW_ANIMATION } from './Image.constants'
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

  const containerStyle: any = [{ overflow: 'hidden', borderRadius }, ...sizeStyle]

  const imageStyles: any = [
    imageState === IMAGE_STATES.loading && { opacity: 0 },
    { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },
  ]

  return (
    <View style={[containerStyle]} accessible accessibilityLabel={alt}>
      {imageState === IMAGE_STATES.loading && <View className='absolute inset-0 bg-neutral-300' />}
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
