import { Platform } from 'react-native'

import { designBorderRadius, designColors, designFonts, designHeights, designSpacing } from './common.style'

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
})

export enum ThemeModesEnum {
  Light = 'light',
  Dark = 'dark',
}

export enum SizesEnum {
  S = 's',
  M = 'm',
  L = 'l',
}

export enum SizesPixelEnum {
  s = designHeights.s,
  m = designHeights.m,
  l = designHeights.l,
}

export const ColorsEnum = {
  Black: designColors.black,
  White: designColors.white,

  Grey100: designColors.grey100,
  Grey200: designColors.grey200,
  Grey300: designColors.grey300,
  Grey400: designColors.grey400,
  Grey500: designColors.grey500,
  Grey600: designColors.grey600,
  Grey700: designColors.grey700,
  Grey800: designColors.grey800,

  PrimaryMain: designColors.primaryMain,
  PrimaryInverse: designColors.primaryInverse,
  PrimaryTransparent: designColors.primaryTransparent,

  SecondaryMain: designColors.secondaryMain,
  SecondaryInverse: designColors.secondaryInverse,
  SecondaryTransparent: designColors.secondaryTransparent,

  Error: designColors.error,
  Success: designColors.success,
  Warning: designColors.warning,
  Disabled: designColors.disabledMain,
}

export const FontsEnum = {
  Text12: designFonts.text12,
  Text14: designFonts.text14,
  Text16: designFonts.text16,
  Text18: designFonts.text18,

  Label14: designFonts.label14,
  Label16: designFonts.label16,
  Label18: designFonts.label18,
  Label20: designFonts.label20,
  Label30: designFonts.label30,
  Label40: designFonts.label40,
  Label50: designFonts.label50,

  Header14: designFonts.header14,
  Header16: designFonts.header16,
  Header18: designFonts.header18,
  Header20: designFonts.header20,
  Header22: designFonts.header22,
  Header26: designFonts.header26,
  Header30: designFonts.header30,
}

export enum SpacingEnum {
  S = designSpacing.s,
  M = designSpacing.m,
  L = designSpacing.l,
}

export enum BorderRadiusEnum {
  S = designBorderRadius.s,
  M = designBorderRadius.m,
  L = designBorderRadius.l,
}

export enum TextAlignEnum {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export enum PlacementsEnum {
  Left = 'left',
  Top = 'top',
  Bottom = 'bottom',
  Right = 'right',
  TopStart = 'top-start',
  TopEnd = 'top-end',
  RightStart = 'right-start',
  RightEnd = 'right-end',
  BottomStart = 'bottom-start',
  BottomEnd = 'bottom-end',
  LeftStart = 'left-start',
  LedftEnd = 'left-end',
}
export enum IconsEnum {
  Share = 'share',
  Comment = 'comment',
  Like = 'like',
  Dots = 'dots',
  Verified = 'verified',
  Filters = 'filters',
  Night = 'night',
  Review = 'review',
  Post = 'post',
  View = 'view',
  CloseSmall = 'closeSmall',
  CloseMedium = 'closeMedium',
  CloseBold = 'closeBold',
  Burger = 'burger',
  ArrowDown = 'arrowDown',
  ArrowRight = 'arrowRight',
  ArrowLeft = 'arrowLeft',
  Geo = 'geo',
  User = 'user',
  Tag = 'tag',
  Basket = 'basket',
  Logo = 'logo',
  Sort = 'sort',
  Plus = 'plus',
  Grap = 'grap',
  Star = 'star',
  Car = 'car',
  ArrowTopRight = 'arrowTopRight',
  ArrowLogo = 'arrowLogo',
  Check = 'check',
  Invisible = 'invisible',
  Visible = 'visible',
  Info = 'info',
  Mines = 'mines',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  France = 'france',
  EmptyWine = 'emptyWine',
  Pencil = 'pencil',

  // Calendar = 'calendar',
  // Edit = 'edit',
  // Phone = 'phone',
  // Ok = 'ok',
  // Trash = 'trash',
  // Mail = 'mail',
  // Money = 'money',
  // Copy = 'copy',
  // ArrowTop = 'arrowTop',
  // ArrowBottom = 'arrowBottom',

  // NotFound = 'notFound',
  // Required = 'required',
  // Info = 'info',
  // ThreeDots = 'threeDots',
  // File = 'file',
  // Download = 'download',
}

export enum SidesEnum {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
  All = 'all',
}

export enum VariantsEnum {
  Primary = 'primary',
  Secondary = 'secondary',
  Text = 'text',
}

export enum DirectionsEnum {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export const variantColorMap: Record<VariantsEnum, string> = {
  [VariantsEnum.Primary]: ColorsEnum.PrimaryMain,
  [VariantsEnum.Secondary]: ColorsEnum.SecondaryMain,
  [VariantsEnum.Text]: ColorsEnum.SecondaryTransparent,
}

export const SIZE_MAP: Record<SizesEnum, number> = {
  [SizesEnum.S]: SizesPixelEnum.s,
  [SizesEnum.M]: SizesPixelEnum.m,
  [SizesEnum.L]: SizesPixelEnum.l,
}

type ValueOf<T> = T[keyof T]

export type FontsEnumType = ValueOf<typeof FontsEnum>
export type ColorsEnumType = ValueOf<typeof ColorsEnum>
export type PlacementsEnumType = ValueOf<typeof PlacementsEnum>
export type DirectionsEnumType = ValueOf<typeof DirectionsEnum>

export const SIZE_MAP_CHIP: Record<SizesEnum, { height: number; paddingHorizontal: number }> = {
  [SizesEnum.S]: { height: 30, paddingHorizontal: 10 },
  [SizesEnum.M]: { height: 36, paddingHorizontal: 12 },
  [SizesEnum.L]: { height: 40, paddingHorizontal: 14 },
}

export enum CountriesEnum {
  Fr = 'fr',
  It = 'it',
  Us = 'us',
  Cl = 'cl',
  Sp = 'sp',
  Au = 'au',
}
