import { designColors } from '@/ui/common.style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },

  loading: {
    opacity: 0,
  },

  cached: {
    transitionDuration: 'none',
  },

  skeleton: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: designColors.grey300,
  },
})
