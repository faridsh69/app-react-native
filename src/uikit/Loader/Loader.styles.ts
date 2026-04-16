import { designFonts } from '@/ui/common.style'
import { StyleSheet, TextStyle } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  texts: {
    alignItems: 'center',
    gap: 5,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: designFonts.text14.fontSize,
    fontWeight: designFonts.text14.fontWeight as TextStyle['fontWeight'],
    lineHeight: 18,
    marginVertical: 0,
  },
  loadingTextBold: {
    fontSize: designFonts.header14.fontSize,
    fontWeight: designFonts.header14.fontWeight as TextStyle['fontWeight'],
  },
})
