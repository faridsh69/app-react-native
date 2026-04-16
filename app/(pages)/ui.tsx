import { ButtonStory, ThemedView } from '@/ui'
import { AvatarsStory } from '@/uikit/stories/AvatarsStory'
import { CheckboxStory } from '@/uikit/stories/CheckboxStory'
import { ChipStory } from '@/uikit/stories/ChipStory'
import { DataNotFoundStory } from '@/uikit/stories/DataNotFoundStory'
import { IconsStory } from '@/uikit/stories/IconStory'
import { ImageStory } from '@/uikit/stories/ImageStory'
import { LabelStory } from '@/uikit/stories/LabelStory'
import { LoaderStory } from '@/uikit/stories/LoaderStory'
import { ProductCardStory } from '@/uikit/stories/ProductCardStory'
import { RatingStory } from '@/uikit/stories/RatingStory'
import { SliderStory } from '@/uikit/stories/SliderStory'
import { TabItemsStory } from '@/uikit/stories/TabItemsStory'
import { TextareaStory } from '@/uikit/stories/TextareaStory'
import { ToastStory } from '@/uikit/stories/ToastStory'
import { ScrollView, StyleSheet } from 'react-native'

export default function UiPage() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.container}>
        <IconsStory />
        <LabelStory />
        <ButtonStory />
        <CheckboxStory />
        <ProductCardStory />
        <DataNotFoundStory />
        <ChipStory />
        <ToastStory />
        <AvatarsStory />
        <ImageStory />
        <TabItemsStory />
        <RatingStory />
        <LoaderStory />
        <TextareaStory />
        {/* <ModalStory /> */}
        <SliderStory />
      </ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
})
