import { Platform, StyleSheet } from 'react-native'

import { designColors } from './common.style'

export const storyStyles = StyleSheet.create({
  scroll: {
    width: '100%',
  },

  content: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 50,
  },

  story: {
    width: '100%',
    flexDirection: 'column',
    gap: 20,
    borderLeftWidth: 1,
    borderLeftColor: designColors.grey100,
    marginTop: 40,
  },
})

export const codeTextStyle = StyleSheet.create({
  inline: {
    fontFamily: Platform.select({
      ios: 'Menlo',
      android: 'monospace',
      default: 'monospace',
    }),
    fontSize: 15,
    fontWeight: '500',
    backgroundColor: '#f5f5f5',
    color: '#c7254e',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    lineHeight: 22,
  },
})
