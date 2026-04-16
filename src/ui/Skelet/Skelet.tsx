// // components/Skelet/Skelet.tsx
// import React, { memo } from 'react'

// import { View } from 'react-native'

// import { Skeleton } from 'moti/skeleton'

// import { SkeletVariants } from './Skelet.enums'
// import { styles } from './Skelet.styels'
// import { SkeletProps } from './Skelet.types'

// const DEFAULT_COUNT = 3

// export const Skelet: React.FC<SkeletProps> = memo(props => {
//   const { variant = SkeletVariants.Rectangular, width = '100%', height = 120, count = 1 } = props

//   const Wrap: React.FC<{ children: React.ReactNode; w?: number | string }> = ({ children, w }) => (
//     <View style={typeof w === 'string' ? { width: w } : undefined}>{children}</View>
//   )

//   // Rectangular (supports `count` like the web lib)
//   if (variant === SkeletVariants.Rectangular) {
//     return (
//       <Skeleton.Group show={true}>
//         <Wrap w={width}>
//           {Array.from({ length: count }).map((_, i) => (
//             <Skeleton
//               key={i}
//               width={typeof width === 'number' ? width : '100%'}
//               height={typeof height === 'number' ? height : 16}
//               radius={8}
//               colorMode={'light'}
//               // style={i ? styles.stackGap : undefined}
//             />
//           ))}
//         </Wrap>
//       </Skeleton.Group>
//     )
//   }

//   // Circle
//   if (variant === SkeletVariants.Circle) {
//     const size = typeof width === 'number' ? width : typeof height === 'number' ? height : 48
//     return (
//       <Skeleton.Group show={true}>
//         <Skeleton width={size} height={size} radius={size / 2} colorMode={'light'} />
//       </Skeleton.Group>
//     )
//   }

//   // Card
//   if (variant === SkeletVariants.Card) {
//     return (
//       <Skeleton.Group show={true}>
//         <Wrap w={width}>
//           <View style={styles.card}>
//             <Skeleton width='100%' height={100} radius={12} colorMode={'light'} />
//             <Skeleton width='100%' height={14} radius={7} colorMode={'light'} />
//             <Skeleton width='30%' height={12} radius={6} colorMode={'light'} />
//           </View>
//         </Wrap>
//       </Skeleton.Group>
//     )
//   }

//   // Cards (3)
//   if (variant === SkeletVariants.Cards) {
//     return (
//       <Skeleton.Group show={true}>
//         <View style={styles.cards}>
//           {Array.from({ length: DEFAULT_COUNT }).map((_, i) => (
//             <View key={i} style={styles.card}>
//               <Skeleton width='100%' height={100} radius={12} colorMode={'light'} />
//               <Skeleton width='100%' height={14} radius={7} colorMode={'light'} />
//               <Skeleton width='30%' height={12} radius={6} colorMode={'light'} />
//             </View>
//           ))}
//         </View>
//       </Skeleton.Group>
//     )
//   }

//   // List (avatar + one line)
//   if (variant === SkeletVariants.List) {
//     return (
//       <Skeleton.Group show={true}>
//         <View style={styles.list}>
//           {Array.from({ length: DEFAULT_COUNT }).map((_, i) => (
//             <View
//               key={i}
//               style={styles.listItem}
//               accessible={false}
//               importantForAccessibility='no-hide-descendants'
//             >
//               <View style={styles.row}>
//                 <Skeleton width={40} height={40} radius={20} colorMode={'light'} />
//                 <View style={styles.ml12} />
//                 <View style={styles.flex1}>
//                   <Skeleton width='100%' height={16} radius={8} colorMode={'light'} />
//                 </View>
//               </View>
//             </View>
//           ))}
//         </View>
//       </Skeleton.Group>
//     )
//   }

//   // TextList (single long line per row)
//   if (variant === SkeletVariants.TextList) {
//     return (
//       <Skeleton.Group show={true}>
//         <View style={styles.list}>
//           {Array.from({ length: DEFAULT_COUNT }).map((_, i) => (
//             <View
//               key={i}
//               style={styles.listItem}
//               accessible={false}
//               importantForAccessibility='no-hide-descendants'
//             >
//               <Skeleton width='100%' height={16} radius={8} colorMode={'light'} />
//             </View>
//           ))}
//         </View>
//       </Skeleton.Group>
//     )
//   }

//   // Table (one large cell + three small cells)
//   if (variant === SkeletVariants.Table) {
//     return (
//       <Skeleton.Group show={true}>
//         <View style={styles.table}>
//           {Array.from({ length: DEFAULT_COUNT }).map((_, i) => (
//             <View key={i} style={styles.tableRow}>
//               <Skeleton width='100%' height={60} radius={10} colorMode={'light'} />
//               <View style={styles.tableCells}>
//                 {[0, 1, 2].map(c => (
//                   <View key={c} style={styles.tableCell}>
//                     <Skeleton width='100%' height={40} radius={8} colorMode={'light'} />
//                   </View>
//                 ))}
//               </View>
//             </View>
//           ))}
//         </View>
//       </Skeleton.Group>
//     )
//   }

//   // FilterBar
//   if (variant === SkeletVariants.FilterBar) {
//     return (
//       <Skeleton.Group show={true}>
//         <View style={styles.filterBar}>
//           <View style={styles.filterCell}>
//             <Skeleton width='100%' height='100%' radius={10} colorMode={'light'} />
//           </View>

//           <View style={styles.filterInputs}>
//             <View style={styles.filterInputLong}>
//               <Skeleton width='100%' height='100%' radius={10} colorMode={'light'} />
//             </View>
//             <View style={styles.filterInputMedium}>
//               <Skeleton width='100%' height='100%' radius={10} colorMode={'light'} />
//             </View>
//             <View style={styles.seperator} />
//             {[0, 1, 2].map(k => (
//               <View key={k} style={styles.filterInputSmall}>
//                 <Skeleton width='100%' height='100%' radius={10} colorMode={'light'} />
//               </View>
//             ))}
//           </View>
//         </View>
//       </Skeleton.Group>
//     )
//   }

//   // Kanban (3 columns with a tall card)
//   return (
//     <Skeleton.Group show={true}>
//       <View style={styles.kanban}>
//         {Array.from({ length: DEFAULT_COUNT }).map((_, i) => (
//           <View style={styles.column} key={i}>
//             <Skeleton width='100%' height={200} radius={12} colorMode={'light'} />
//           </View>
//         ))}
//       </View>
//     </Skeleton.Group>
//   )
// })

// export default Skelet
