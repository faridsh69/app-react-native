import { designColors, designFonts, designSpacing } from '@/ui/common.style'
import { StyleSheet, TextStyle } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: designColors.grey300,
  },

  tabItem: {
    backgroundColor: 'transparent',
    height: 40,
    minHeight: 40,
    paddingHorizontal: designSpacing.m,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    borderBottomWidth: 2,
    borderBottomColor: designColors.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    fontSize: designFonts.header14.fontSize,
    fontWeight: designFonts.header14.fontWeight as TextStyle['fontWeight'],
  },

  pressed: {
    backgroundColor: designColors.primaryMain,
    outlineWidth: 1,
    outlineStyle: 'solid',
  },

  hovered: {
    backgroundColor: designColors.grey100,
  },

  focused: {
    shadowColor: designColors.primaryMain,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },

  active: {
    borderBottomColor: designColors.primaryMain,
  },

  disabled: {
    opacity: 0.5,
  },

  label: {
    minWidth: 50,
    flexShrink: 1,
  },

  title: {
    width: '100%',
    paddingVertical: 10,
    paddingLeft: 0,
    fontSize: designFonts.header22.fontSize,
    fontWeight: designFonts.header22.fontWeight as TextStyle['fontWeight'],
  },

  badge: {
    marginLeft: 6,
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: designColors.errorLight,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: designFonts.text12.fontSize,
    fontWeight: designFonts.text12.fontWeight as TextStyle['fontWeight'],
  },
  badgeText: {
    lineHeight: 14,
    color: designColors.white,
    fontSize: designFonts.text12.fontSize,
    fontWeight: designFonts.text12.fontWeight as TextStyle['fontWeight'],
  },

  vertical: {
    padding: 20,
    flexDirection: 'column',
  },

  horizontal: {
    flexDirection: 'row',
  },
})
