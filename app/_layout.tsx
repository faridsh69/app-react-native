import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import 'react-native-reanimated'
import '../global.css'

import { GluestackUIProvider, ThemeModesEnum } from '@/ui'
import { useColorScheme } from 'react-native'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <GluestackUIProvider mode={ThemeModesEnum.Light}>
      <ThemeProvider value={colorScheme === ThemeModesEnum.Light ? DefaultTheme : DarkTheme}>
        <Stack>
          <Stack.Screen name='(pages)' options={{ headerShown: false }} />
          <Stack.Screen name='modal' options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style='auto' />
      </ThemeProvider>
    </GluestackUIProvider>
  )
}
