import { Label, ThemedView } from '@/ui'
import { StyleSheet } from 'react-native'

export default function SearchPage() {
  return (
    <ThemedView style={styles.container}>
      <Label label='Search Page' />
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
