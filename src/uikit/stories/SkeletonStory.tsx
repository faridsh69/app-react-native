// import React, { useMemo } from 'react'

// import { StyleSheet, Text, View } from 'react-native'

// import { codeTextStyle } from 'styles/story.style'

// import Skelet from 'src/ui/Skelet/Skelet'
// import { SkeletVariants } from 'src/ui/Skelet/Skelet.enums'
// import { SkeletProps } from 'src/ui/Skelet/Skelet.types'

// import { Story } from './Story'

// export const SkeletonStory: React.FC = () => {
//   const defaultProps: SkeletProps = useMemo(
//     () => ({
//       variant: SkeletVariants.Rectangular,
//       width: 300,
//       height: 30,
//       // optional if you wired it: colorMode: 'light', show: true
//     }),
//     [],
//   )

//   // Keep the exact web logic: iterate all variants and adjust Circle width
//   const items: SkeletProps[] = useMemo(() => {
//     const keys = Object.keys(SkeletVariants) as Array<keyof typeof SkeletVariants>
//     return keys.map(variantKey => {
//       const variant = SkeletVariants[variantKey]
//       return {
//         ...defaultProps,
//         variant,
//         width: variantKey === 'Circle' ? defaultProps.height : defaultProps.width,
//       }
//     })
//   }, [defaultProps])

//   return (
//     <Story>
//       <Text style={styles.h4}>17) Skeleton</Text>
//       <Text style={styles.small}>Should be used inside loader state of components</Text>
//       <Text style={codeTextStyle.inline}>{'<Skelet width={200} height={300} />'}</Text>

//       <View style={styles.section}>
//         {items.map((propsItem, index) => (
//           <View key={`${propsItem.variant}-${index}`} style={styles.item}>
//             <Text style={styles.variantLabel}>{String(propsItem.variant)}</Text>
//             <View style={styles.spacer} />
//             <Skelet {...propsItem} />
//           </View>
//         ))}
//       </View>
//     </Story>
//   )
// }

// const styles = StyleSheet.create({
//   h4: { fontSize: 18, fontWeight: '600' },
//   small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6, marginBottom: 8 },
//   section: {
//     marginTop: 16,
//     alignItems: 'flex-start',
//     width: 320,
//     gap: 16, // if your RN version doesn’t support gap yet, remove and rely on marginBottom in .item
//   },
//   item: {
//     width: '100%',
//     marginBottom: 16,
//   },
//   variantLabel: {
//     fontSize: 14,
//     fontWeight: '500',
//     opacity: 0.85,
//   },
//   spacer: { height: 8 },
// })
