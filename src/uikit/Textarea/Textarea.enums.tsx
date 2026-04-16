import { styles } from './Textarea.styles'

export enum TextareaSizes {
  S = '24',
  M = '34',
  L = '48',
}

export const SIZE_MAP_TEXTAREA = {
  [TextareaSizes.S]: styles.sizeS,
  [TextareaSizes.M]: styles.sizeM,
  [TextareaSizes.L]: styles.sizeL,
}
