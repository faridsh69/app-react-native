import { ColorsEnum, FontsEnum } from '@/ui/enums'
import { Pressable, View } from 'react-native'

import { Image } from '../Image/Image'
import { Label } from '../Label/Label'
import { styles } from './ProductImage.styles'
import { ProductImageProps } from './ProductImage.types'

export const ProductImage = (props: ProductImageProps) => {
  const { src, alt, width, height } = props

  const hasImage = !!src && src !== 'None'

  const containerStyle: any = [styles.imageHolder, width ? { width } : { width: '100%' }, height ? { height } : null]

  return (
    <Pressable
      style={containerStyle}
      accessibilityRole={hasImage ? 'imagebutton' : 'image'}
      accessibilityLabel={alt || 'Product image'}
    >
      {hasImage ? (
        <Image src={src} width={width} height={height} alt={alt} />
      ) : (
        <View style={styles.emptyWineText}>
          <Label label='Image is unavailable' font={FontsEnum.Label16} color={ColorsEnum.Grey700} linesCount={2} />
        </View>
      )}
    </Pressable>
  )
}
