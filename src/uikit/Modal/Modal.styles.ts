import { designColors } from '@/ui/common.style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  sheetBg: {
    backgroundColor: designColors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderRightWidth: 1,
    borderRightColor: designColors.grey500,
  },

  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D1D5DB',
    alignSelf: 'center',
    marginTop: 6,
  },

  sheet: {}, // outer ScrollView
  content: {}, // content container inside ScrollView

  bodyPadding: {
    paddingHorizontal: 32,
    paddingTop: 0,
    paddingBottom: 32,
  },

  header: {
    minHeight: 64,
    height: 64,
    paddingLeft: 32,
    paddingRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerSecondary: { justifyContent: 'space-between' },

  closeBtn: {
    paddingBottom: 18,
  },

  body: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
  },

  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    gap: 10,
  },
  primaryTitle: { fontSize: 24, fontWeight: '700', textAlign: 'center' },

  footer: {
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
  },

  variantSecondaryBody: {},
})
