import { View } from 'react-native'

import { Button } from '../Button/Button'
import { Chip } from '../Chip/Chip'
import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import { ProductImage } from '../ProductImage/ProductImage'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from '../theme/themeEnums'
import { toastSuccess } from '../Toast/Toast'
import { styles } from './ProductCard.styles'
import { ProductCardProps } from './ProductCard.types'

export const ProductCard = (props: ProductCardProps) => {
  const { wine } = props
  if (!wine) return null

  const { src, label, price, vintage, litr, rate = 0, rateCount = 0, country, tags = [] } = wine

  const handleAddBasket = () => {
    toastSuccess({ title: 'Success', description: 'Wine added to basket successfully.' })
  }

  const hasPrice = price != null

  return (
    <View style={styles.productCard}>
      <View style={styles.image}>
        <ProductImage src={src} height={220} width={220} alt={label} />
      </View>
      <View className='min-w-0'>
        <Label
          label={`${label} ${vintage}${litr ? `, ${litr}ml` : ''}`}
          font={FontsEnum.Label16}
          linesCount={2}
          cursorPointer
        />
        <View className='mt-1.5 min-w-0 flex-row flex-wrap items-center'>
          {hasPrice && <Label label={`$${price}`} font={FontsEnum.Header16} cursorPointer />}
          <View className='flex-row items-center gap-2'>
            <Icon icon={IconsEnum.Star} size={SizesEnum.S} />
            <Label label={`${rate} (${rateCount})`} font={FontsEnum.Label14} cursorPointer />
          </View>
        </View>
        <View className='mb-2.5 mt-1.5 min-w-0 flex-row flex-wrap items-center'>
          <View className='mb-1.5 mr-1.5 min-w-0 shrink'>
            {/* <Chip label={country} size={SizesEnum.S} country={mappingDataCountryNameToFlag(country)} noHover /> */}
          </View>
          {tags.map((tag: any) => (
            <View key={String(tag)} className='mb-1.5 mr-1.5 min-w-0 shrink'>
              <Chip label={tag} size={SizesEnum.S} icon={IconsEnum.Star} noHover />
            </View>
          ))}
        </View>
        <View className='self-start'>
          {hasPrice ? (
            <Button
              iconLeft={IconsEnum.Plus}
              variant={VariantsEnum.Primary}
              label='Add to cart'
              size={SizesEnum.S}
              onPress={handleAddBasket}
            />
          ) : (
            <Button label='Not available' size={SizesEnum.S} disabled />
          )}
        </View>
      </View>
    </View>
  )
}
