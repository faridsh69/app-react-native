import { ButtonStory, ThemedView } from '@/ui'
import { StyleSheet } from 'react-native'

export default function UiPage() {
  return (
    <ThemedView style={styles.container}>
      <ButtonStory />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
})
