import React from 'react'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

import { Icon } from '../Icon/Icon'
import { Image } from '../Image/Image'
import { Label } from '../Label/Label'
import { FontsEnum, IconsEnum, SizesEnum, TextAlignEnum } from '../theme/themeEnums'
import { MainSliderProps } from './MainSlider.types'

const { width: SCREEN_W } = Dimensions.get('window')

export const MainSlider = (props: MainSliderProps) => {
  const { options } = props

  return (
    <View className='w-full'>
      <Carousel
        width={SCREEN_W}
        height={360}
        data={options}
        loop
        autoPlay
        autoPlayInterval={1}
        scrollAnimationDuration={6000}
        pagingEnabled={false}
        onConfigurePanGesture={() => ({ enabled: false })}
        renderItem={({ item }) => (
          <View className='items-center'>
            <View className='flex w-[232px] flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-200 p-4'>
              <Image src={item.src} alt={item.label} width={200} height={200} />

              <Icon icon={IconsEnum.View} size={SizesEnum.M} />
              <Label
                label={item.label}
                font={FontsEnum.Text14}
                linesCount={2}
                textAlign={TextAlignEnum.Center}
              />
            </View>
          </View>
        )}
      />
    </View>
  )
}
