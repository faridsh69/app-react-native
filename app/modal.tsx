import { PAGES } from '@/core/constants/navigation.constants'
import { Label, ThemedView } from '@/ui'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function ModalPage() {
  return (
    <ThemedView style={styles.container}>
      <Label label='modal title' />
      <Link href={PAGES.home.path as any} dismissTo style={styles.link}>
        <Label label='Go to home screen' />
      </Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
