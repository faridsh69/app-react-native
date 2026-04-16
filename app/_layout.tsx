import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import 'react-native-reanimated'
import '../global.css'

import { ThemeModesEnum } from '@/theme/constants/theme.constants'
import { GluestackUIProvider } from '@/ui/components/ui/gluestack-ui-provider'
import { useColorScheme } from 'react-native'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <GluestackUIProvider mode={ThemeModesEnum.Dark}>
      <ThemeProvider value={colorScheme === ThemeModesEnum.Dark ? DefaultTheme : DarkTheme}>
        <Stack>
          <Stack.Screen name='(pages)' options={{ headerShown: false }} />
          <Stack.Screen name='modal' options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style='auto' />
      </ThemeProvider>
    </GluestackUIProvider>
  )
}
