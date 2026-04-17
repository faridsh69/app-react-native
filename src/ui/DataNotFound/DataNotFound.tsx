import { View } from 'react-native'

import { Icon } from '../Icon/Icon'
import { Image } from '../Image/Image'
import { Label } from '../Label/Label'
import { Loader } from '../Loader/Loader'
import { FontsEnum, IconsEnum, SizesEnum } from '../theme/themeEnums'
import { DataNotFoundProps } from './DataNotFound.types'

export const DataNotFound = (props: DataNotFoundProps) => {
  const { isLoading, label: propsLabel, icon, image, style } = props

  // const { t } = useTrans()

  // const finalLabel = propsLabel || t('No results found!')
  // const label = isLoading ? t('Searching...') : finalLabel
  const finalLabel = propsLabel || 'No results found!'
  const label = isLoading ? 'Searching...' : finalLabel

  return (
    <View className='w-full items-center justify-center px-4 py-6'>
      {isLoading && <Loader label='' subLabel='' size={SizesEnum.L} />}
      {!isLoading && !image && (
        <Icon icon={icon || IconsEnum.EmptyWine} style={[{ width: 56, height: 56, marginBottom: 12 }, style]} />
      )}
      {!isLoading && image && <Image src={image} />}
      <Label label={label} font={FontsEnum.Text14} disabled />
    </View>
  )
}
