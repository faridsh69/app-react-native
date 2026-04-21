import React, { useEffect, useRef } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { Dimensions, Platform, View } from 'react-native'

import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from '../theme/themeEnums'
import { ModalProps } from './Popup.types'

export const Popup = (props: ModalProps) => {
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

  const modalRef = useRef<BottomSheetModal>(null)
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
  const contentContainerStyle = [
    bodyPadding && { paddingHorizontal: 32, paddingTop: 0, paddingBottom: 32 },
    { minHeight: MIN_HEIGHT },
  ]

  return (
    <BottomSheetModal
      ref={modalRef}
      snapPoints={snapPoints}
      maxDynamicContentSize={maxHeight}
      enablePanDownToClose={enablePanDownToClose}
      enableBlurKeyboardOnGesture
      keyboardBlurBehavior='restore'
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
      backgroundStyle={[
        {
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderRightWidth: 1,
          borderRightColor: '#A3A3A3',
        },
      ]}
      handleIndicatorStyle={{
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#D1D5DB',
        alignSelf: 'center',
        marginTop: 6,
      }}
    >
      <BottomSheetScrollView
        // @ts-ignore
        style={[{ alignSelf: 'center', width }]}
        contentContainerStyle={contentContainerStyle}
        keyboardShouldPersistTaps='handled'
      >
        {(title || isSecondary) && (
          <View
            className={[
              'h-16 min-h-16 flex-row items-center px-6 pl-8',
              isSecondary ? 'justify-between' : 'justify-end',
            ].join(' ')}
          >
            {isSecondary && (
              <View className='flex-row items-center justify-center gap-2.5'>
                <Label label={title} font={FontsEnum.Label18} />
              </View>
            )}
            <View style={{ paddingBottom: 18 }}>
              <Button
                variant={VariantsEnum.Text}
                size={SizesEnum.M}
                iconLeft={IconsEnum.CloseSmall}
                onPress={handleClose}
              />
            </View>
          </View>
        )}

        <View
          style={[
            { paddingHorizontal: 16, paddingBottom: 16, paddingTop: 8 },
            bodyPadding && { paddingHorizontal: 32, paddingTop: 0, paddingBottom: 32 },
          ]}
        >
          {!isSecondary && (
            <View className='mb-5 flex-row items-center justify-center gap-2.5'>
              <Label label={title} font={FontsEnum.Label30} linesCount={7} textAlign='center' />
            </View>
          )}
          {body}
          <View className='mt-5 items-center text-center'>{actions}</View>
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  )
}
