import { LoginModal } from '@/auth/components/LoginModal/LoginModal'
import { Container, Label } from '@/ui'

export default function ProfilePage() {
  return (
    <Container>
      <Label label='Profile Page' />
      <LoginModal />
    </Container>
  )
}
