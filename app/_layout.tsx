import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import 'react-native-reanimated'
import '../global.css'

import { GluestackUIProvider, ThemeModesEnum } from '@/ui'
import { toastConfig } from '@/ui/Toast/Toast'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { useFonts } from 'expo-font'
import { useColorScheme } from 'react-native'
import Toast from 'react-native-toast-message'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  useFonts({
    SpaceMono: require('src/ui/theme/fonts/SpaceMono-Regular.ttf'),
  })

  return (
    <GluestackUIProvider mode={ThemeModesEnum.Light}>
      <ThemeProvider value={colorScheme === ThemeModesEnum.Light ? DefaultTheme : DarkTheme}>
        <BottomSheetModalProvider>
          <Stack>
            <Stack.Screen name='(pages)' options={{ headerShown: false }} />
            <Stack.Screen name='modal' options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>
        </BottomSheetModalProvider>
        <StatusBar style='auto' />
        <Toast config={toastConfig} position='bottom' />
      </ThemeProvider>
    </GluestackUIProvider>
  )
}
