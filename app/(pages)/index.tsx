import { usePersistState } from '@/core/hooks/usePersistState'
import { HelloWave, Label, LabelTypesEnum, ParallaxScrollView, ThemedView } from '@/ui'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { Button, StyleSheet } from 'react-native'

export default function HomePage() {
  const [state, setState] = usePersistState('state', 0)

  const handlePress = () => {
    setState(state + 1)
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image source={require('@/assets/partial-react-logo.png')} style={styles.reactLogo} />}
    >
      <ThemedView style={styles.titleContainer}>
        <Label>Welcome</Label>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Label type={LabelTypesEnum.title}>title</Label>
        <Label type={LabelTypesEnum.subtitle}>subtitle</Label>
        <Label type={LabelTypesEnum.defaultSemiBold}>defaultSemiBold</Label>
        <Label>default text</Label>
        <Button onPress={handlePress} title={`Press me ${state}`} />

        <Link href='/modal'>
          <Link.Trigger>
            <Label type='subtitle'>Modal</Label>
          </Link.Trigger>
          <Link.Preview />
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
