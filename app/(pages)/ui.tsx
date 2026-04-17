import { ThemedView } from '@/ui'
import { AvatarsStory } from '@/ui/stories/AvatarsStory'
import { ButtonStory } from '@/ui/stories/ButtonStory'
import { CheckboxStory } from '@/ui/stories/CheckboxStory'
import { ChipStory } from '@/ui/stories/ChipStory'
import { DataNotFoundStory } from '@/ui/stories/DataNotFoundStory'
import { IconsStory } from '@/ui/stories/IconStory'
import { ImageStory } from '@/ui/stories/ImageStory'
import { LabelStory } from '@/ui/stories/LabelStory'
import { LoaderStory } from '@/ui/stories/LoaderStory'
import { ProductCardStory } from '@/ui/stories/ProductCardStory'
import { RatingStory } from '@/ui/stories/RatingStory'
import { SelectStory } from '@/ui/stories/SelectStory'
import { SliderStory } from '@/ui/stories/SliderStory'
import { TabItemsStory } from '@/ui/stories/TabItemsStory'
import { TextareaStory } from '@/ui/stories/TextareaStory'
import { TextInputStory } from '@/ui/stories/TextInputStory'
import { ToastStory } from '@/ui/stories/ToastStory'
import { ScrollView } from 'react-native'

export default function UiPage() {
  return (
    <ThemedView>
      <ScrollView>
        <SelectStory />
        <TextInputStory />
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//   },
// })
