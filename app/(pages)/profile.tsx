import { Container, Label } from '@/ui'
import { StyleSheet } from 'react-native'

export default function ProfilePage() {
  return (
    <Container style={styles.container}>
      <Label label='Profile Page' />
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
