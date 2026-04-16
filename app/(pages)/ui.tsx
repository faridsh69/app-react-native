import { PAGES } from '@/core/constants/navigation.constants'
import { ThemedText } from '@/ui/components/ThemedText'
import { ThemedView } from '@/ui/components/ThemedView'
import { ButtonStory } from '@/ui/Stories/ButtonStory'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function UiPage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title'>
        <Link href={PAGES.search.path as any}>Search</Link>
        <ButtonStory />
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
