import { PAGES } from '@/core/constants/navigation.constants'
import { useAtom } from '@/core/lib/jotai'
import { locationAtom } from '@/location/contexts/locationAtom'
import { Link } from 'expo-router'
import { View, type ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import { FontsEnum, IconsEnum, SizesEnum } from '../theme/themeEnums'

export type ContainerProps = ViewProps & {
  className?: string
  light?: string
  dark?: string
}

export const Container = ({
  style,
  className,
  light,
  dark,
  children,
  ...otherProps
}: ContainerProps) => {
  const contentClassName = ['flex-1', className].filter(Boolean).join(' ')

  const [locationModal] = useAtom(locationAtom)

  return (
    <SafeAreaView className='flex-1' edges={['top']}>
      <View className='flex-row items-center justify-between px-4 pt-2 pb-3'>
        <Link href={PAGES.home.path as any}>
          <Icon icon={IconsEnum.Logo} size={SizesEnum.L} />
        </Link>
        <Link href={PAGES.location.path as any}>
          <View className='flex-row gap-1'>
            <Label label={<Icon icon={IconsEnum.Geo} size={SizesEnum.L} />} />
            <Label label='shipped To' font={FontsEnum.Text14} />
            <Label label={locationModal.region} font={FontsEnum.Text14} />
          </View>
        </Link>
      </View>
      <View style={style} className={contentClassName} {...otherProps}>
        {children}
      </View>
    </SafeAreaView>
  )
}
