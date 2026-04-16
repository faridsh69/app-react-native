import React from 'react'
import { ScrollView, View, ViewProps } from 'react-native'

import { storyStyles } from '../theme/story.style'

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
    <ScrollView>
      <View style={[storyStyles.story, style]} {...rest}>
        {children}
      </View>
    </ScrollView>
  )
}
