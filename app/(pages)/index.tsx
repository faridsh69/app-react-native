import { usePersistState } from '@/core/hooks/usePersistState'
import { HelloWave, Label, ThemedView } from '@/ui'
import { Link } from 'expo-router'
import { Button, StyleSheet, Text } from 'react-native'

export default function HomePage() {
  const [state, setState] = usePersistState('state', 0)

  const handlePress = () => {
    setState(state + 1)
  }

  return (
    <ThemedView>
      <Label label='Welcome' />
      <HelloWave />
      <Button onPress={handlePress} title={`Press me ${state}`} />

      <Link href='/modal'>
        <Link.Trigger>
          <Label label='Modal' />
        </Link.Trigger>
        <Link.Preview />
      </Link>
      <Text>
        + 1 configs: + 1 ts config + 2 eslint + 3 prettier + 4 huskey + 5 unit test + 6 pagination + 7 tabs + 2 utils: +
        1 ls helpers with test + 2 axios + 3 react query + 4 variable and array helpers with test + 5 font 6 final
        kardan raveshe css zadan 7 final kardan theme 8 home page chera text nadare 9 modal baz kardan 10 sample jotai o
        portal 11 ye api location call konam 3 uikit 1 label 2 button 3 textinput 4 textarea 5 select 6 checkbox 7 radio
        8 switch 9 form 10 modal 11 skeleton 12 toast 13 loading 4 theme 1 product card 2 slider 3 filters 4 home
        elements 5 footer 6 header 5 modules 1 location 2 login 3 register 4 account 5 my orders 6 change password 7
        search 8 cards 9 wine-details 10 basket 11 checkout 12 homepage 13 voss ai chat 14 voss ai voice 15 voss ai
        camera 16 wish list
      </Text>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
