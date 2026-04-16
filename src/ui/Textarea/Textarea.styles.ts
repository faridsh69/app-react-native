import { designColors, designFonts } from '@/ui/theme/common.style'
import { StyleSheet, TextStyle } from 'react-native'

export const styles = StyleSheet.create({
  field: {
    flexDirection: 'column',
    gap: 4,
    maxWidth: '100%',
  },

  wrapper: {
    position: 'relative',
    maxWidth: '100%',
  },

  textarea: {
    // outline: none
    borderWidth: 1,
    borderColor: designColors.grey200,
    width: '100%',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    lineHeight: 22,
    textAlignVertical: 'top',
    backgroundColor: 'white',
  },

  focused: {
    borderColor: designColors.primaryMain,
  },
  resizeNone: {
    borderWidth: 1,
    borderColor: designColors.grey200,
  },
  disabled: {
    color: designColors.grey500,
  },

  sizeS: { height: 100 },
  sizeM: { height: 120 },
  sizeL: { height: 140 },

  counter: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: designFonts.text12.fontSize,
    fontWeight: designFonts.text12.fontWeight as TextStyle['fontWeight'],
    lineHeight: 18,
  },
  count: {
    color: designColors.success,
    marginRight: 3,
  },
  limit: {
    color: designColors.grey600,
  },
  inValid: {
    color: designColors.error,
  },
})
