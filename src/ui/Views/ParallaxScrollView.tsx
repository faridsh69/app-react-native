import type { PropsWithChildren, ReactElement } from 'react'
import { useColorScheme } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from 'react-native-reanimated'

import { Label } from '../Label/Label'

const HEADER_HEIGHT = 250

export const ParallaxScrollView = ({ children, headerImage, headerBackgroundColor }: Props) => {
  const colorScheme = useColorScheme() ?? 'light'
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const scrollOffset = useScrollOffset(scrollRef)
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    }
  })

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={{ backgroundColor: 'black', flex: 1 }}
      scrollEventThrottle={16}
    >
      <Animated.View
        className='overflow-hidden'
        style={[
          { height: HEADER_HEIGHT, backgroundColor: headerBackgroundColor[colorScheme] },
          headerAnimatedStyle,
        ]}
      >
        {headerImage}
      </Animated.View>
      <Label label={children} />
    </Animated.ScrollView>
  )
}

type Props = PropsWithChildren<{
  headerImage: ReactElement
  headerBackgroundColor: { dark: string; light: string }
}>
