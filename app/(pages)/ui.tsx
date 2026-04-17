import { ThemedView } from '@/ui'
import { RadioList } from '@/ui/Radio/Radio'
import { AvatarsStory } from '@/ui/stories/AvatarsStory'
import { ButtonStory } from '@/ui/stories/ButtonStory'
import { CheckboxStory } from '@/ui/stories/CheckboxStory'
import { ChipStory } from '@/ui/stories/ChipStory'
import { DataNotFoundStory } from '@/ui/stories/DataNotFoundStory'
import { IconsStory } from '@/ui/stories/IconStory'
import { ImageStory } from '@/ui/stories/ImageStory'
import { LabelStory } from '@/ui/stories/LabelStory'
import { LoaderStory } from '@/ui/stories/LoaderStory'
import { ModalStory } from '@/ui/stories/ModalStory'
import { ModalStory2 } from '@/ui/stories/ModalStory2'
import { ProductCardStory } from '@/ui/stories/ProductCardStory'
import { RadioListStory } from '@/ui/stories/RadioStory'
import { RatingStory } from '@/ui/stories/RatingStory'
import { SelectStory } from '@/ui/stories/SelectStory'
import { SliderStory } from '@/ui/stories/SliderStory'
import { SwitchStory } from '@/ui/stories/SwitchStory'
import { TabItemsStory } from '@/ui/stories/TabItemsStory'
import { TextareaStory } from '@/ui/stories/TextareaStory'
import { TextInputStory } from '@/ui/stories/TextInputStory'
import { ToastStory } from '@/ui/stories/ToastStory'
import { ScrollView } from 'react-native'

export default function UiPage() {
  return (
    <ThemedView>
      <ScrollView>
        <ModalStory2 />
        <ModalStory />
        <SwitchStory />
        <RadioListStory />
        <CheckboxStory />
        <TextInputStory />
        <TextareaStory />
        <RatingStory />
        <SelectStory />

        {/* <ModalStory /> */}

        <ButtonStory />
        <ChipStory />
        <ImageStory />
        <ProductCardStory />
        <SliderStory />
        <AvatarsStory />
        <DataNotFoundStory />

        <ToastStory />

        <TabItemsStory />

        <LoaderStory />
        <IconsStory />
        <LabelStory />
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
