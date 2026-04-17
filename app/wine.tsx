import { Label, ParallaxScrollView } from '@/ui'
import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'

export default function WinePage() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image source={require('@/assets/partial-react-logo.png')} style={styles.reactLogo} />}
    >
      <Label label='Welcome' />
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
