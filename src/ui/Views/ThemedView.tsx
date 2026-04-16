import { useThemeColor } from '@/ui/theme/hooks/useThemeColor'
import { View, type ViewProps } from 'react-native'

export type ThemedViewProps = ViewProps & {
  light?: string
  dark?: string
}

export function ThemedView({ style, light, dark, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light, dark }, 'background')

  return <View style={[{ backgroundColor }, style]} {...otherProps} />
}
