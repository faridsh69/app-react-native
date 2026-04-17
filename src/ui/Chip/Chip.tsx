import { Platform, Pressable } from 'react-native'

import { Icon } from '../Icon/Icon'
import { Label } from '../Label/Label'
import { ColorsEnum, FontsEnum, IconsEnum, SIZE_MAP_CHIP, SizesEnum } from '../theme/themeEnums'
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
    {
      alignSelf: 'flex-start',
      maxWidth: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 100,
      borderWidth: 1,
      gap: 8,
      height,
      paddingHorizontal,
      width,
      borderColor: active ? ColorsEnum.PrimaryMain : ColorsEnum.Grey400,
      cursor: 'pointer',
      userSelect: 'none',
    },
    !noHover && isWeb && { borderColor: ColorsEnum.PrimaryMain },
    noHover && { pointerEvents: 'none', borderColor: ColorsEnum.Grey400 },
  ]

  return (
    <Pressable onPress={() => {}} disabled={noHover} pointerEvents={noHover ? 'none' : 'auto'} style={containerStyle}>
      {!!iconProps && <Icon icon={iconProps} size={size} />}

      {/* {!!country && <Flag country={country} />} */}
      {!!country && <Icon icon={IconsEnum.France} size={SizesEnum.S} />}

      <Label label={label} font={FONTS_SIZES_MAP[size]} cursorPointer />

      {!!onClose && (
        <Pressable onPress={onClose} hitSlop={8} className='px-1.5 py-0.5'>
          <Icon icon={IconsEnum.CloseMedium} size={SizesEnum.S} />
        </Pressable>
      )}
    </Pressable>
  )
}
