import React from 'react'
import { storyStyles } from '@/ui/Stories/story.style'
import { ScrollView, View, ViewProps } from 'react-native'

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
