import React from 'react'
import { PAGES } from '@/core/constants/navigation.constants'
import { usePortal } from '@/core/hooks/usePortal'
import { HapticTab, IconSymbol } from '@/ui'
import { Tabs } from 'expo-router'

export default function PagesLayout() {
  usePortal()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      {Object.values(PAGES)
        .filter(page => page.hasFooterLink)
        .map(page => {
          return (
            <Tabs.Screen
              name={page.name}
              key={page.name}
              options={{
                title: page.name,
                tabBarIcon: ({ color }) => (
                  <IconSymbol size={28} name={page.icon as any} color={color} />
                ),
              }}
            />
          )
        })}
    </Tabs>
  )
}
