import React from 'react'
import { designColors } from '@/ui/theme/common.style'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { DirectionsEnum } from '../theme/themeEnums'
import { TabItemsOption, TabItemsProps } from './TabItems.types'

export const TabItems = (props: TabItemsProps) => {
  const { options = [], onChange, value, direction = DirectionsEnum.Horizontal, title = '' } = props

  const isVertical = direction === DirectionsEnum.Vertical
  const wrapperClassName = 'max-w-full border-b border-brand-gray-300'
  const verticalContainerClassName = 'max-w-full flex-col border-b border-brand-gray-300 p-5'
  const rowClassName = 'flex-row items-center'
  const titleClassName = 'w-full py-2.5 text-[22px] font-bold text-brand-ink'
  const tabItemBaseClassName =
    'min-w-0 shrink-0 grow-0 basis-auto self-start justify-center border-b-2 border-brand-white bg-transparent px-space-m h-control-m min-h-control-m rounded-t-[8px]'
  const tabItemContentClassName = 'flex-row items-center gap-space-s'
  const labelClassName = 'min-w-0 shrink text-[14px] font-bold text-brand-ink'
  const badgeClassName =
    'min-w-[18px] h-[18px] items-center justify-center rounded-full bg-red-500 px-1'
  const badgeTextClassName = 'text-[12px] leading-[14px] text-brand-white'

  return (
    <>
      {isVertical ? (
        <View className={verticalContainerClassName}>
          {!!title && <Text className={titleClassName}>{title}</Text>}
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
                className={[
                  tabItemBaseClassName,
                  'w-full',
                  isActive && 'border-brand-primary',
                  disabled && 'opacity-50',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={({ pressed, hovered }) => [
                  hovered && !disabled ? { backgroundColor: designColors.grey100 } : null,
                  pressed && !disabled
                    ? {
                        backgroundColor: designColors.primaryMain,
                        outlineWidth: 1,
                        outlineStyle: 'solid',
                      }
                    : null,
                ]}
              >
                {({ pressed }) => (
                  <View className={tabItemContentClassName}>
                    {icon && icon}
                    {label && (
                      <Text
                        className={[labelClassName, pressed && !disabled && 'text-brand-white'].filter(Boolean).join(' ')}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                      >
                        {label}
                      </Text>
                    )}
                    {badge ? (
                      <View className={badgeClassName}>
                        <Text className={badgeTextClassName}>{badge}</Text>
                      </View>
                    ) : null}
                  </View>
                )}
              </Pressable>
            )
          })}
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className={wrapperClassName}
          contentContainerClassName={rowClassName}
        >
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
                className={[tabItemBaseClassName, isActive && 'border-brand-primary', disabled && 'opacity-50']
                  .filter(Boolean)
                  .join(' ')}
                style={({ pressed, hovered }) => [
                  hovered && !disabled ? { backgroundColor: designColors.grey100 } : null,
                  pressed && !disabled
                    ? {
                        backgroundColor: designColors.primaryMain,
                        outlineWidth: 1,
                        outlineStyle: 'solid',
                      }
                    : null,
                ]}
              >
                {({ pressed }) => (
                  <View className={tabItemContentClassName}>
                    {icon && icon}
                    {label && (
                      <Text
                        className={[labelClassName, pressed && !disabled && 'text-brand-white'].filter(Boolean).join(' ')}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                      >
                        {label}
                      </Text>
                    )}
                    {badge ? (
                      <View className={badgeClassName}>
                        <Text className={badgeTextClassName}>{badge}</Text>
                      </View>
                    ) : null}
                  </View>
                )}
              </Pressable>
            )
          })}
        </ScrollView>
      )}
    </>
  )
}
