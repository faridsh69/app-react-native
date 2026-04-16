import { ThemedText, ThemedView } from '@/ui'
import { StyleSheet } from 'react-native'

export default function SearchPage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title'>Search Page</ThemedText>
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
