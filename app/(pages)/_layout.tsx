import React from 'react'
import { PAGES } from '@/core/constants/navigation.constants'
import { HapticTab, IconSymbol } from '@/ui'
import { Colors } from '@/ui/theme/constants/theme.constants'
import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'

export default function PagesLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      {Object.values(PAGES).map(page => {
        return (
          <Tabs.Screen
            name={page.name}
            key={page.name}
            options={{
              title: page.name,
              tabBarIcon: ({ color }) => <IconSymbol size={28} name={page.icon as any} color={color} />,
            }}
          />
        )
      })}
    </Tabs>
  )
}
