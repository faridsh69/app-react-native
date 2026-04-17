import { Container, Label } from '@/ui'
import { StyleSheet } from 'react-native'

export default function BasketPage() {
  return (
    <Container style={styles.container}>
      <Label label='Basket Page' />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
