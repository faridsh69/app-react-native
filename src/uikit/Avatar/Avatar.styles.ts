import { designColors, designHeights } from '@/ui/common.style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: designColors.grey100,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  size_s: {
    width: designHeights.s,
    minWidth: designHeights.s,
    height: designHeights.s,
    minHeight: designHeights.s,
    borderRadius: designHeights.s / 2,
  },
  size_m: {
    width: designHeights.m,
    minWidth: designHeights.m,
    height: designHeights.m,
    minHeight: designHeights.m,
    borderRadius: designHeights.m / 2,
  },
  size_l: {
    width: designHeights.l,
    minWidth: designHeights.l,
    height: designHeights.l,
    minHeight: designHeights.l,
    borderRadius: designHeights.l / 2,
  },
})
