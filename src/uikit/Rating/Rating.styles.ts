import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    maxWidth: '100%',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 4,
  },
  stars: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  star: {
    paddingLeft: 3,
    ...(Platform.OS === 'web' ? { cursor: 'pointer' } : null),
  },
  disabledOverlay: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    width: 260,
    height: 70,
  },
})
