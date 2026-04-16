import React, { useState } from 'react'
import { Pressable, View } from 'react-native'

import { Label } from '../Label/Label'
import { SizesEnum } from '../theme/enums'
import { styles } from './Rating.styles'
import { RatingProps } from './Rating.types'
import { StarSvg } from './StarSvg'

export const Rating = (props: RatingProps) => {
  const {
    label,
    value = 0,
    onChange,
    disabled = false,
    size = SizesEnum.M,
    required,
    hasError,
    hint,
    noHover = false,
  } = props
  const [previewStar, setPreviewStar] = useState<number | null>(null)
  const shouldPreview = (star: number) => previewStar !== null && star <= previewStar

  return (
    <View style={styles.wrapper}>
      <Label label={label} required={required} hasError={hasError} hint={hint} disabled={disabled} />

      {disabled && <View pointerEvents='none' style={styles.disabledOverlay} />}

      <View style={styles.stars} pointerEvents={noHover ? 'none' : 'auto'}>
        {[5, 4, 3, 2, 1].map(star => {
          const filled = value >= star
          const handlers =
            noHover || disabled
              ? {}
              : {
                  onPressIn: () => setPreviewStar(star),
                  onPressOut: () => setPreviewStar(null),
                  // RN Web hover
                  onHoverIn: () => setPreviewStar(star),
                  onHoverOut: () => setPreviewStar(null),
                }

          return (
            <Pressable
              key={star}
              onPress={!disabled && !noHover ? () => onChange?.(star) : undefined}
              hitSlop={8}
              style={({ pressed }) => [styles.star, pressed ? { transform: [{ scale: 0.98 }] } : null]}
              accessibilityRole='button'
              accessibilityLabel={`Rate ${star} star${star > 1 ? 's' : ''}`}
              accessibilityState={{ disabled }}
              {...handlers}
            >
              <StarSvg size={size} fill={filled} preview={shouldPreview(star)} disabled={disabled} />
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}
