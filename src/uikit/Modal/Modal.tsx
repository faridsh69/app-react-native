import React, { useEffect, useRef } from 'react'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from '@/ui/enums'
import {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetModal as GorhomBottomSheetModal,
} from '@gorhom/bottom-sheet'
import { Dimensions, Platform, View } from 'react-native'

import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import { styles } from './Modal.styles'
import { ModalProps } from './Modal.types'

export const Modal = (props: ModalProps) => {
  const {
    title,
    body,
    actions,
    zIndex,
    overlayZIndex,
    isOpen: propIsOpen = true,
    setIsOpen,
    bodyPadding = false,
    width,
    closeOnClickOutside = true,
    variant = VariantsEnum.Primary,
    snapPoints,
    enablePanDownToClose = true,
  } = props

  const modalRef = useRef<GorhomBottomSheetModal>(null)
  const { height: VH } = Dimensions.get('window')
  const maxHeight = Math.round(VH * 0.9)
  const MIN_HEIGHT = 250

  useEffect(() => {
    if (propIsOpen) {
      modalRef.current?.present()
    } else {
      modalRef.current?.dismiss()
    }
  }, [propIsOpen])

  const handleClose = () => {
    setIsOpen?.(false)
  }
  const isSecondary = variant === VariantsEnum.Secondary

  return (
    <GorhomBottomSheetModal
      ref={modalRef}
      snapPoints={snapPoints}
      maxDynamicContentSize={maxHeight}
      enablePanDownToClose={enablePanDownToClose}
      onDismiss={handleClose}
      android_keyboardInputMode={Platform.select({ android: 'adjustResize', default: undefined })}
      backdropComponent={backdropProps => (
        <BottomSheetBackdrop
          {...backdropProps}
          opacity={0.5}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior={closeOnClickOutside ? 'close' : 'none'}
          style={[backdropProps.style, overlayZIndex != null && { zIndex: overlayZIndex }]}
        />
      )}
      style={[zIndex != null && { zIndex }]}
      backgroundStyle={[styles.sheetBg]}
      handleIndicatorStyle={styles.handle}
    >
      <BottomSheetScrollView
        // @ts-ignore
        style={[styles.sheet, { alignSelf: 'center', width }]}
        contentContainerStyle={[
          styles.content,
          bodyPadding && styles.bodyPadding,
          isSecondary && styles.variantSecondaryBody,
          { minHeight: MIN_HEIGHT },
        ]}
        keyboardShouldPersistTaps='handled'
      >
        {(title || isSecondary) && (
          <View style={[styles.header, isSecondary && styles.headerSecondary]}>
            {isSecondary && (
              <View style={styles.title}>
                <Label label={title} font={FontsEnum.Label18} />
              </View>
            )}
            <View style={styles.closeBtn}>
              <Button
                variant={VariantsEnum.Text}
                size={SizesEnum.M}
                iconLeft={IconsEnum.CloseSmall}
                onClick={handleClose}
              />
            </View>
          </View>
        )}

        <View style={[styles.body, bodyPadding && styles.bodyPadding]}>
          {!isSecondary && (
            <View style={styles.title}>
              <Label label={title} font={FontsEnum.Label30} linesCount={7} textAlign='center' />
            </View>
          )}
          {body}
          <View style={styles.footer}>{actions}</View>
        </View>
      </BottomSheetScrollView>
    </GorhomBottomSheetModal>
  )
}
