import { ColorsEnum, FontsEnum, IconsEnum, SIZE_MAP_CHIP, SizesEnum } from '@/ui/enums'
import { Platform, Pressable } from 'react-native'

import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import { styles } from './Chip.styles'
import { ChipProps } from './Chip.types'

const FONTS_SIZES_MAP = {
  [SizesEnum.S]: FontsEnum.Label14,
  [SizesEnum.M]: FontsEnum.Label16,
  [SizesEnum.L]: FontsEnum.Label18,
}

export const Chip = (props: ChipProps) => {
  const { label, onClose, size = SizesEnum.M, icon: iconProps, active, width, noHover = false, country } = props
  const { height, paddingHorizontal } = SIZE_MAP_CHIP[size]
  const isWeb = Platform.OS === 'web'

  const containerStyle: any = [
    styles.wrapper,
    {
      height,
      paddingHorizontal,
      width,
      borderColor: active ? ColorsEnum.PrimaryMain : ColorsEnum.Grey400,
      cursor: 'pointer',
      userSelect: 'none',
    },
    !noHover && isWeb && { borderColor: ColorsEnum.PrimaryMain },
    noHover && styles.noHover,
  ]

  return (
    <Pressable onPress={() => {}} disabled={noHover} pointerEvents={noHover ? 'none' : 'auto'} style={containerStyle}>
      {!!iconProps && <Icon icon={iconProps} size={size} />}

      {/* {!!country && <Flag country={country} />} */}
      {!!country && <Icon icon={IconsEnum.France} size={SizesEnum.S} />}

      <Label label={label} font={FONTS_SIZES_MAP[size]} cursorPointer />

      {!!onClose && (
        <Pressable onPress={onClose} hitSlop={8} style={styles.close}>
          <Icon icon={IconsEnum.CloseMedium} size={SizesEnum.S} />
        </Pressable>
      )}
    </Pressable>
  )
}
