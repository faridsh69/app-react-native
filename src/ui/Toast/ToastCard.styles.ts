import { designColors } from '@/ui/theme/common.style'
import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 12,
    maxWidth: 600,
  },

  toast: {
    flexDirection: 'column',
    backgroundColor: designColors.white,
    borderRadius: 8,
    padding: 10,
    borderLeftWidth: 6,
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.15)',
    gap: 8,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 8,
  },

  check: {
    width: 20,
    height: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: { flex: 1 },

  close: {
    padding: Platform.select({ ios: 8, android: 6 }),
  },
})
