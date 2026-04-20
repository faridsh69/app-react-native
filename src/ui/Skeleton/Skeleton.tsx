// import React from 'react'
// import { Skeleton } from 'moti/skeleton'
// import { StyleSheet, View, ViewStyle } from 'react-native'

// type Props = {
//   width?: number | string
//   height?: number
//   radius?: number
//   style?: ViewStyle
//   colorMode?: 'light' | 'dark'
// }

// export const AppSkeleton = ({
//   width = '100%',
//   height = 16,
//   radius = 8,
//   style,
//   colorMode = 'light',
// }: Props) => {
//   return (
//     <View style={[styles.container, style]}>
//       <Skeleton width={width as any} height={height} radius={radius} colorMode={colorMode as any} />
//     </View>
//   )
// }

// export const CardSkeleton = () => {
//   return (
//     <View style={styles.card}>
//       <AppSkeleton width={60 as any} height={60} radius={30} />

//       <View style={styles.textContainer}>
//         <AppSkeleton width='80%' height={16} />
//         <AppSkeleton width='60%' height={16} style={{ marginTop: 8 }} />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     overflow: 'hidden',
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   textContainer: {
//     flex: 1,
//   },
// })
