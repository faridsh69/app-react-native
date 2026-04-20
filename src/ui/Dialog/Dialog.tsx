import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native'

type AppModalSize = 'sm' | 'md' | 'lg' | 'full'

type AppModalProps = {
  visible: boolean
  onClose: () => void

  title?: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode

  size?: AppModalSize
  showCloseButton?: boolean
  closeOnBackdrop?: boolean
  scrollable?: boolean

  contentStyle?: StyleProp<ViewStyle>
}

const sizeStyles: Record<AppModalSize, ViewStyle> = {
  sm: {
    width: '84%',
    maxWidth: 360,
  },
  md: {
    width: '90%',
    maxWidth: 420,
  },
  lg: {
    width: '94%',
    maxWidth: 560,
  },
  full: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    maxWidth: undefined,
  },
}

export function Dialog({
  visible,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  showCloseButton = true,
  closeOnBackdrop = true,
  scrollable = false,
  contentStyle,
}: AppModalProps) {
  const isFull = size === 'full'

  const BodyWrapper = scrollable ? ScrollView : View

  return (
    <Modal
      visible={visible}
      transparent
      animationType='none'
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className='flex-1'
      >
        <Pressable
          className={[
            'flex-1 items-center justify-center bg-black/20',
            isFull ? 'p-0' : 'p-5',
          ].join(' ')}
          onPress={closeOnBackdrop ? onClose : undefined}
        >
          <Pressable
            className='overflow-hidden rounded-[20px] bg-white'
            style={[
              {
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.12)',
                maxHeight: '88%',
              },
              sizeStyles[size],
              isFull && { maxHeight: '100%', height: '100%' },
              contentStyle,
            ]}
            onPress={e => e.stopPropagation()}
          >
            {(title || description || showCloseButton) && (
              <View className='min-h-16 flex-row items-start justify-between gap-3 border-b border-neutral-200 px-[18px] pb-[14px] pt-[18px]'>
                <View className='flex-1 pt-0.5'>
                  {!!title && (
                    <Text className='text-[18px] font-semibold text-neutral-900'>{title}</Text>
                  )}
                  {!!description && (
                    <Text className='mt-1.5 text-[14px] leading-5 text-neutral-500'>
                      {description}
                    </Text>
                  )}
                </View>

                {showCloseButton ? (
                  <Pressable
                    onPress={onClose}
                    hitSlop={8}
                    className='h-8 w-8 items-center justify-center rounded-full'
                  >
                    <Ionicons name='close' size={22} color='#171717' />
                  </Pressable>
                ) : null}
              </View>
            )}

            <BodyWrapper
              className='p-[18px]'
              contentContainerStyle={scrollable ? { paddingBottom: 4 } : undefined}
              showsVerticalScrollIndicator={false}
            >
              {children}
            </BodyWrapper>

            {footer ? (
              <View className='border-t border-neutral-200 px-[18px] pb-[18px] pt-2'>{footer}</View>
            ) : null}
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  )
}
