import { usePersistState } from '@/core/hooks/usePersistState'
import { Container, Label } from '@/ui'
import { Link } from 'expo-router'
import { Button } from 'react-native'

export default function HomePage() {
  const [state, setState] = usePersistState('state', 0)

  const handlePress = () => {
    setState(state + 1)
  }

  return (
    <Container>
      <Label label='Welcome' />
      <Button onPress={handlePress} title={`Press me ${state}`} />

      <Link href='/locationModal'>
        {/* <Link.Trigger> */}
        <Label label='Modal' />
        {/* </Link.Trigger> */}
        {/* <Link.Preview /> */}
      </Link>
    </Container>
  )
}
