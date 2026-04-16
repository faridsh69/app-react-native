import { designSpacing } from '@/ui/theme/common.style'
import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: designSpacing.s,
    maxWidth: '100%',
    minWidth: 0,
  },
  pressable: {
    maxWidth: '100%',
    minWidth: 0,
    flexShrink: 1,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
    minWidth: 0,
    flexShrink: 1,
  },
  textBase: {
    maxWidth: '100%',
    minWidth: 0,
    flexShrink: 1,
  },
  required: {
    marginLeft: designSpacing.s,
    width: 14,
    textAlign: 'center',
  },
  cursorPointer: Platform.select({
    web: { cursor: 'pointer' },
    default: {},
  }),
})
