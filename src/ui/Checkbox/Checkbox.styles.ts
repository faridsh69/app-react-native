import { designBorderRadius, designColors, designHeights, designSpacing } from '@/ui/theme/common.style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: designColors.grey600,
    borderRadius: designBorderRadius.s,
  },

  size_s: { width: designHeights.s, height: designHeights.s },
  size_m: { width: designHeights.m, height: designHeights.m },
  size_l: { width: designHeights.l, height: designHeights.l },

  checked: {
    backgroundColor: designColors.black,
  },
  unchecked: {
    backgroundColor: designColors.white,
  },
  disabled: {
    opacity: 0.6,
  },
  error: {
    borderColor: designColors.error,
  },

  label: {
    marginLeft: designSpacing.s,
  },
})
