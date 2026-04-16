import { useThemeColor } from '@/ui/theme/hooks/useThemeColor'
import { StyleSheet, View, type ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { IconsEnum, SizesEnum, VariantsEnum } from '../theme/enums'

export type ThemedViewProps = ViewProps & {
  light?: string
  dark?: string
}

export function ThemedView({ style, light, dark, children, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light, dark }, 'background')

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]} edges={['top']}>
      <View style={styles.header}>
        <Icon icon={IconsEnum.Logo} size={SizesEnum.L} />
        <Button label='shipped To' size={SizesEnum.S} variant={VariantsEnum.Secondary} />
      </View>
      <View style={[styles.content, { backgroundColor }, style]} {...otherProps}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  content: {
    flex: 1,
  },
})
