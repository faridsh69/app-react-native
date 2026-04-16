import { designColors } from '@/ui/theme/common.style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  imageHolder: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: designColors.beige,
    borderRadius: 16,
    position: 'relative',
    marginBottom: 10,
    padding: 10,
  },

  centerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  emptyWineText: {
    alignItems: 'center',
  },
})
