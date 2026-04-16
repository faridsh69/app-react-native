import React from 'react'
import { SafeAreaView, View, ViewProps } from 'react-native'

import { storyStyles } from './story.style'

type StoryProps = ViewProps & {
  showsVerticalScrollIndicator?: boolean
}

export const Story: React.FC<React.PropsWithChildren<StoryProps>> = ({
  children,
  style,
  showsVerticalScrollIndicator = false,
  ...rest
}) => {
  return (
    <SafeAreaView>
      <View style={[storyStyles.story, style]} {...rest}>
        {children}
      </View>
    </SafeAreaView>
  )
}
