import { designColors } from '@/ui/common.style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: { width: '100%' },
  carouselSlide: {
    alignItems: 'center',
  },
  slideCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    width: 232,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: designColors.grey200,
    padding: 16,
  },
})
