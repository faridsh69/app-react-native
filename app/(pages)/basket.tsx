import { Label, ThemedView } from '@/ui'
import { StyleSheet } from 'react-native'

export default function BasketPage() {
  return (
    <ThemedView style={styles.container}>
      <Label label='Basket Page' />
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
