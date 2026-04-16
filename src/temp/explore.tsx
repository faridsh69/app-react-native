import { Accordion, Label, ThemedView } from '@/ui'
import { ExternalLink } from '@/ui/ExternalLink/ExternalLink'
import { IconSymbol } from '@/ui/Icon/icon-symbol'
import { ParallaxScrollView } from '@/ui/Views/ParallaxScrollView'
import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'

export default function ExplorePage() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color='#808080'
          name='chevron.left.forwardslash.chevron.right'
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Label label='Explore' />
      </ThemedView>
      <Accordion title='File-based routing'>
        <ExternalLink href='https://docs.expo.dev/router/introduction'></ExternalLink>
      </Accordion>
      <Accordion title='Android, iOS, and web support'></Accordion>
      <Accordion title='Images'>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href='https://reactnative.dev/docs/images'></ExternalLink>
      </Accordion>
      <Accordion title='Light and dark mode components'></Accordion>
      <Accordion title='Animations'></Accordion>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
