import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
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

export function AppModal({
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
    <Modal visible={visible} transparent animationType='fade' onRequestClose={onClose} statusBarTranslucent>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <Pressable
          style={[styles.backdrop, isFull && styles.backdropFull]}
          onPress={closeOnBackdrop ? onClose : undefined}
        >
          <Pressable
            style={[styles.card, sizeStyles[size], isFull && styles.cardFull, contentStyle]}
            onPress={e => e.stopPropagation()}
          >
            {(title || description || showCloseButton) && (
              <View style={styles.header}>
                <View style={styles.headerText}>
                  {!!title && <Text style={styles.title}>{title}</Text>}
                  {!!description && <Text style={styles.description}>{description}</Text>}
                </View>

                {showCloseButton ? (
                  <Pressable onPress={onClose} hitSlop={8} style={styles.closeButton}>
                    <Ionicons name='close' size={22} color='#171717' />
                  </Pressable>
                ) : null}
              </View>
            )}

            <BodyWrapper
              style={styles.body}
              contentContainerStyle={scrollable ? styles.bodyScrollContent : undefined}
              showsVerticalScrollIndicator={false}
            >
              {children}
            </BodyWrapper>

            {footer ? <View style={styles.footer}>{footer}</View> : null}
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdropFull: {
    padding: 0,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
    maxHeight: '88%',
  },
  cardFull: {
    maxHeight: '100%',
    height: '100%',
  },
  header: {
    minHeight: 64,
    paddingTop: 18,
    paddingBottom: 14,
    paddingHorizontal: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  headerText: {
    flex: 1,
    paddingTop: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#171717',
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: '#737373',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flexGrow: 0,
    padding: 18,
  },
  bodyScrollContent: {
    paddingBottom: 4,
  },
  footer: {
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 18,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E5E5E5',
  },
})
