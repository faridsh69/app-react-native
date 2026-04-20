import { LoginModal } from '@/auth/components/LoginModal/LoginModal'
import { ProfilePage } from '@/auth/components/ProfilePage'
import { Container, Label } from '@/ui'

export default function Profile() {
  return (
    <Container>
      <Label label='Profile Page' />
      <LoginModal />
      <ProfilePage />
    </Container>
  )
}
