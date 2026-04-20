import React from 'react'
import { WineType } from '@/core/types/core.types'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { ProductCard } from '../ProductCard/ProductCard'
import { ProductImage } from '../ProductImage/ProductImage'
import { Story } from './Story'
import { codeTextStyle } from './story.style'

const Wine1 = require('../../assets/w1.png')
const Wine2 = require('../../assets/w2.png')

export const ProductCardStory: React.FC = () => {
  const wines: WineType[] = [
    {
      id: '1',
      src: Wine1,
      vintage: 2021,
      litr: 750,
      label: 'Rombauer Vineyards Carneros Chardonnay',
      price: 69.99,
      rate: 4.3,
      rateCount: 97,
      match: 'Your 97% match',
      country: 'United states',
      tags: ['Organic', 'Napa Valley', 'Dry'],
    },
    {
      id: '2',
      src: Wine2,
      vintage: 2021,
      litr: 750,
      label: 'Rombauer Vineyards Carneros Chardonnay',
      price: 69.99,
      rate: 4.3,
      rateCount: 97,
      match: 'Your 97% match',
      country: 'United states',
      tags: ['Organic', 'Napa Valley', 'Dry'],
    },
    {
      id: '3',
      vintage: 2021,
      litr: 750,
      label: 'Rombauer Vineyards Carneros Chardonnay',
      price: 69.99,
      rate: 4.3,
      rateCount: 97,
      match: 'Your 97% match',
      country: 'United states',
      tags: ['Organic', 'Napa Valley', 'Dry'],
    },
  ]

  return (
    <Story>
      <Text style={styles.h4}>ProductCard</Text>
      <Text style={styles.small}>We are using this component to render list of wines</Text>

      <Text style={codeTextStyle.inline}>{'<ProductCard wine={wine} />'}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {wines.map(wine => (
          <View key={`card-${wine.id}`} style={styles.cardWrap}>
            <ProductCard wine={wine} />
          </View>
        ))}
      </ScrollView>

      <View>
        <View style={{ marginBottom: 16 }}>
          <ProductImage src={Wine1} alt='text' width={97} height={84} />
        </View>
        <ProductImage src={''} alt='text' width={140} height={140} />
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6, marginBottom: 6 },
  row: {
    width: '100%',
    gap: 20,
    paddingVertical: 4,
    alignItems: 'center',
  },
  cardWrap: {},
  col: {
    marginTop: 16,
    gap: 20,
    flexDirection: 'column',
  },
  hCardWrap: {},
})
