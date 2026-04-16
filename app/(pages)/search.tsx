import { ThemedText } from '@/ui/components/ThemedText'
import { ThemedView } from '@/ui/components/ThemedView'
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
