import { LoginModal } from '@/auth/components/LoginModal/LoginModal'
import { Container, Label } from '@/ui'

export default function ProfilePage() {
  return (
    <Container className='flex-1 items-center justify-center'>
      <Label label='Profile Page' />
      <LoginModal />
    </Container>
  )
}
