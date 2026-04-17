import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import 'react-native-reanimated'
import '../global.css'

import { QUERY_CLIENT } from '@/apis/reactQuery/reactQuery.constants'
import { PAGES } from '@/core/constants/navigation.constants'
import { GluestackUIProvider, ThemeModesEnum } from '@/ui'
import { toastConfig } from '@/ui/Toast/Toast'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  useFonts({
    SpaceMono: require('src/ui/theme/fonts/SpaceMono-Regular.ttf'),
  })

  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <GluestackUIProvider mode={ThemeModesEnum.Light}>
        <ThemeProvider value={colorScheme === ThemeModesEnum.Light ? DefaultTheme : DarkTheme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <Stack>
                <Stack.Screen name='(pages)' options={{ headerShown: false }} />
                <Stack.Screen name={PAGES.location.name} options={{ presentation: 'modal', title: 'Location' }} />
              </Stack>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
          <StatusBar style='auto' />
          <Toast config={toastConfig} position='bottom' />
        </ThemeProvider>
      </GluestackUIProvider>
    </QueryClientProvider>
  )
}
