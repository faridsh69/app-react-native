import { Accordion, Label, ThemedView } from '@/ui'
import { ExternalLink } from '@/ui/ExternalLink/ExternalLink'
import { IconSymbol } from '@/ui/Icon/icon-symbol'
import { Fonts } from '@/ui/theme/theme.constants'
import { ParallaxScrollView } from '@/ui/Views/ParallaxScrollView'
import { Image } from 'expo-image'
import { Platform, StyleSheet } from 'react-native'

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
        <Label
          type='title'
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          Explore
        </Label>
      </ThemedView>
      <Label>This app includes example code to help you get started.</Label>
      <Accordion title='File-based routing'>
        <Label>
          This app has two screens: <Label type='defaultSemiBold'>app/(tabs)/index.tsx</Label> and{' '}
          <Label type='defaultSemiBold'>app/(tabs)/explore.tsx</Label>
        </Label>
        <Label>
          The layout file in <Label type='defaultSemiBold'>app/(tabs)/_layout.tsx</Label> sets up the tab navigator.
        </Label>
        <ExternalLink href='https://docs.expo.dev/router/introduction'>
          <Label type='link'>Learn more</Label>
        </ExternalLink>
      </Accordion>
      <Accordion title='Android, iOS, and web support'>
        <Label>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <Label type='defaultSemiBold'>w</Label> in the terminal running this project.
        </Label>
      </Accordion>
      <Accordion title='Images'>
        <Label>
          For static images, you can use the <Label type='defaultSemiBold'>@2x</Label> and{' '}
          <Label type='defaultSemiBold'>@3x</Label> suffixes to provide files for different screen densities
        </Label>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href='https://reactnative.dev/docs/images'>
          <Label type='link'>Learn more</Label>
        </ExternalLink>
      </Accordion>
      <Accordion title='Light and dark mode components'>
        <Label>
          This template has light and dark mode support. The <Label type='defaultSemiBold'>useColorScheme()</Label> hook
          lets you inspect what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
        </Label>
        <ExternalLink href='https://docs.expo.dev/develop/user-interface/color-themes/'>
          <Label type='link'>Learn more</Label>
        </ExternalLink>
      </Accordion>
      <Accordion title='Animations'>
        <Label>
          This template includes an example of an animated component. The{' '}
          <Label type='defaultSemiBold'>components/HelloWave.tsx</Label> component uses the powerful{' '}
          <Label type='defaultSemiBold' style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </Label>{' '}
          library to create a waving hand animation.
        </Label>
        {Platform.select({
          ios: (
            <Label>
              The <Label type='defaultSemiBold'>components/ParallaxScrollView.tsx</Label> component provides a parallax
              effect for the header image.
            </Label>
          ),
        })}
      </Accordion>
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
