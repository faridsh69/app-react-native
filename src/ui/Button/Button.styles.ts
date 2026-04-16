import { StyleSheet } from 'react-native'

import { designColors, designHeights, designSpacing } from '../common.style'

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    userSelect: 'none',
    gap: 8,
    borderRadius: 20,
  },

  label: {
    textAlign: 'center',
    includeFontPadding: false,
  },

  size_s: {
    height: designHeights.s,
    minHeight: designHeights.s,
    paddingHorizontal: designSpacing.s,
  },
  size_m: {
    height: designHeights.m,
    minHeight: designHeights.m,
    paddingHorizontal: designSpacing.m,
  },
  size_l: {
    height: designHeights.l,
    minHeight: designHeights.l,
    paddingHorizontal: designSpacing.l,
  },

  variant_primary: {
    backgroundColor: designColors.primaryMain,
    borderColor: designColors.primaryMain,
    color: designColors.primaryInverse,
  },
  variant_secondary: {
    backgroundColor: designColors.secondaryMain,
    borderColor: designColors.secondaryInverse,
    color: designColors.secondaryInverse,
  },
  variant_text: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: designColors.black,
    minHeight: 30,
    paddingHorizontal: 0,
    position: 'relative',
  },

  // Active states
  active_primary: {
    backgroundColor: designColors.primaryInverse,
    color: designColors.primaryMain,
    borderColor: designColors.primaryMain,
  },
  active_secondary: {
    backgroundColor: designColors.secondaryInverse,
    color: designColors.secondaryMain,
    borderColor: designColors.black,
  },
  active_text: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },

  disabled: {
    backgroundColor: designColors.disabledMain,
    color: designColors.disabledInverse,
    borderWidth: 0,
    opacity: 0.5,
  },

  noBorderRadius_left: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  noBorderRadius_right: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  noBorderRadius_top: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  noBorderRadius_bottom: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  noHover: {},
})
