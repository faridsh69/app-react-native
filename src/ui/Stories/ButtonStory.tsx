import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { Button } from '../Button/Button'
import { IconsEnum, SizesEnum, VariantsEnum } from '../enums'
import { codeTextStyle } from './story.style'

export const ButtonStory = () => {
  const sizes = [SizesEnum.M, SizesEnum.S]
  const variants = [VariantsEnum.Primary, VariantsEnum.Secondary, VariantsEnum.Text]

  return (
    <ScrollView>
      <View className='flex flex-col p-4 gap-4'>
        <Text style={styles.h4}>3) Button</Text>
        <Text style={styles.small}>
          We have 3 variants: primary, secondary and text. Supports iconLeft and iconRight. Sizes: M and S.
        </Text>

        <Text style={codeTextStyle.inline}>
          {
            '<Button label="Button" size={SizesEnum.M} variant={VariantsEnum.Primary} iconRight={IconsEnum.ArrowRight} />'
          }
        </Text>

        {/* Matrix: rows per size, cells per variant (fixed width like web: 300) */}
        <View style={styles.matrixCol}>
          {sizes.map(size => (
            <View key={`row-${size}`} style={styles.row}>
              {variants.map(variant => (
                <View key={`btn-${size}-${variant}`} style={styles.cell}>
                  <Button
                    label={`Variant: ${variant}  size: ${size}`}
                    size={size}
                    variant={variant}
                    iconRight={IconsEnum.ArrowRight}
                  />
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Disabled</Text>
          <Button label='Disabled' disabled />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Custom width</Text>
          <Button label='Save' width={190} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Left icon</Text>
          <Button label='Shipping' iconLeft={IconsEnum.Car} variant={VariantsEnum.Secondary} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
  matrixCol: { flexDirection: 'column', gap: 30 },
  row: {
    flexDirection: 'row',
    gap: 30,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  cell: {},
  section: { marginTop: 16, gap: 8 },
  sectionTitle: { fontSize: 14, fontWeight: '600', opacity: 0.85 },
})
