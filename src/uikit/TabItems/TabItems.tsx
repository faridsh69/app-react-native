import React from 'react'
import { designColors } from '@/ui/common.style'
import { DirectionsEnum } from '@/ui/enums'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { styles } from './TabItems.styles'
import { TabItemsOption, TabItemsProps } from './TabItems.types'

export const TabItems = (props: TabItemsProps) => {
  const { options = [], onChange, value, direction = DirectionsEnum.Horizontal, title = '' } = props

  const isVertical = direction === DirectionsEnum.Vertical
  const Wrapper = isVertical ? View : ScrollView
  const wrapperProps = isVertical
    ? {}
    : {
        horizontal: true,
        showsHorizontalScrollIndicator: false,
        contentContainerStyle: [styles.wrapper, styles.horizontal],
      }

  const containerStyle = [styles.wrapper, isVertical ? styles.vertical : styles.horizontal]

  return (
    <Wrapper {...wrapperProps} style={isVertical ? containerStyle : undefined}>
      {isVertical && !!title && <Text style={styles.title}>{title}</Text>}
      {options.map((option: TabItemsOption) => {
        const { label, value: optionValue, icon, disabled, badge } = option
        const isActive = value === optionValue

        return (
          <Pressable
            key={String(optionValue)}
            accessibilityRole='button'
            accessibilityState={{ disabled: !!disabled, selected: isActive }}
            disabled={disabled}
            onPress={() => onChange?.(optionValue)}
            style={({ pressed, hovered }) => [
              styles.tabItem,
              isActive && styles.active,
              disabled && styles.disabled,
              hovered && !disabled && styles.hovered,
              pressed && !disabled && styles.pressed,
              isVertical && { width: '100%' },
            ]}
          >
            {({ pressed }) => (
              <>
                {icon && icon}
                {label && (
                  <Text
                    style={[styles.label, pressed && { color: designColors.white }]}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                  >
                    {label}
                  </Text>
                )}
                {badge && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badge}</Text>
                  </View>
                )}
              </>
            )}
          </Pressable>
        )
      })}
    </Wrapper>
  )
}
