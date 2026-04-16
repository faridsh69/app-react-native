import { ComponentProps } from 'react'
import { FontAwesome } from '@expo/vector-icons'

import { IconsEnum, SizesEnum } from '../theme/enums'
import EmptyWineIcon from './svgs/EmptyWineIcon'
import LogoIcon from './svgs/LogoIcon'
import ViewIcon from './svgs/ViewIcon'

export const sizeMapping = {
  [SizesEnum.S]: 12,
  [SizesEnum.M]: 16,
  [SizesEnum.L]: 20,
}

export const svgMapping: any = {
  [IconsEnum.View]: {
    Svg: ViewIcon,
    viewBox: '10 10',
  },
  [IconsEnum.Logo]: {
    Svg: LogoIcon,
    viewBox: '150 16',
  },
  [IconsEnum.EmptyWine]: {
    Svg: EmptyWineIcon,
    viewBox: '58 240',
  },
}

export const FontAwesomeMapping: Partial<Record<IconsEnum, ComponentProps<typeof FontAwesome>['name']>> = {
  [IconsEnum.Share]: 'share',
  [IconsEnum.Comment]: 'comment',
  [IconsEnum.Like]: 'heart',
  [IconsEnum.Dots]: 'ellipsis-h',
  [IconsEnum.Verified]: 'check-circle',
  [IconsEnum.Filters]: 'filter',
  [IconsEnum.Review]: 'star-half',
  [IconsEnum.Post]: 'file-text',
  [IconsEnum.View]: 'eye',
  [IconsEnum.CloseSmall]: 'times',
  [IconsEnum.CloseMedium]: 'times-circle',
  [IconsEnum.CloseBold]: 'close',
  [IconsEnum.Burger]: 'bars',
  [IconsEnum.ArrowDown]: 'arrow-down',
  [IconsEnum.ArrowRight]: 'arrow-right',
  [IconsEnum.ArrowLeft]: 'arrow-left',
  [IconsEnum.Geo]: 'map-marker',
  [IconsEnum.User]: 'user',
  [IconsEnum.Tag]: 'tag',
  [IconsEnum.Basket]: 'shopping-basket',
  [IconsEnum.Logo]: 'star',
  [IconsEnum.Sort]: 'sort',
  [IconsEnum.Plus]: 'plus',
  [IconsEnum.Star]: 'star',
  [IconsEnum.Car]: 'car',
  [IconsEnum.ArrowLogo]: 'arrow-circle-up',
  [IconsEnum.Check]: 'check',
  [IconsEnum.Invisible]: 'eye-slash',
  [IconsEnum.Visible]: 'eye',
  [IconsEnum.Info]: 'info-circle',
  [IconsEnum.Mines]: 'minus-circle',
  [IconsEnum.Success]: 'check-circle',
  [IconsEnum.Warning]: 'exclamation-triangle',
  [IconsEnum.Error]: 'times-circle',
  [IconsEnum.France]: 'flag',
  [IconsEnum.Night]: 'moon-o',
  [IconsEnum.Pencil]: 'pencil',
}
