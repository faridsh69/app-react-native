import { designColors } from '@/ui/common.style'
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
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
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
