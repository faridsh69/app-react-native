import { designColors } from '@/ui/theme/common.style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  productCard: {
    width: '100%',
    marginBottom: 24,
  },

  image: {
    alignSelf: 'stretch',
    backgroundColor: designColors.beige,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 12,
  },

  content: {
    minWidth: 0,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    minWidth: 0,
    marginTop: 6,
  },

  rateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  tagsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    minWidth: 0,
    marginTop: 6,
    marginBottom: 10,
  },

  tagItem: {
    marginRight: 6,
    marginBottom: 6,
    flexShrink: 1,
    minWidth: 0,
  },

  cta: {
    alignSelf: 'flex-start',
  },
})
