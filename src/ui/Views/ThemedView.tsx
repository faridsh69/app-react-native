import { StyleSheet, View, type ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { IconsEnum, SizesEnum, VariantsEnum } from '../theme/themeEnums'

export type ThemedViewProps = ViewProps & {
  light?: string
  dark?: string
}

export function ThemedView({ style, light, dark, children, ...otherProps }: ThemedViewProps) {
  return (
    <SafeAreaView style={[styles.safeArea]} edges={['top']}>
      <View style={styles.header}>
        <Icon icon={IconsEnum.Logo} size={SizesEnum.L} />
        <Button label='shipped To' size={SizesEnum.S} variant={VariantsEnum.Secondary} />
      </View>
      <View style={[styles.content, style]} {...otherProps}>
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
