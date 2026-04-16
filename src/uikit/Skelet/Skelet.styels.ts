import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  // shared
  row: { flexDirection: 'row', alignItems: 'center' },
  flex1: { flex: 1 },
  mt12: { marginTop: 12 },
  mt8: { marginTop: 8 },
  stackGap: { marginTop: 8 },

  // card(s)
  card: { width: '100%', marginBottom: 12 },
  cards: { width: '100%' },

  // list
  list: { width: '100%' },
  listItem: { marginBottom: 12 },
  ml12: { width: 12 },

  // table
  table: { width: '100%' },
  tableRow: { marginBottom: 12 },
  tableCells: { flexDirection: 'row', gap: 8, marginTop: 8 },
  tableCell: { flex: 1 },

  // filter bar
  filterBar: { width: '100%', flexDirection: 'row', alignItems: 'center', gap: 12 },
  filterCell: { width: 120, height: 40 },
  filterInputs: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 },
  filterInputLong: { flex: 1.5, height: 40 },
  filterInputMedium: { flex: 1, height: 40 },
  filterInputSmall: { width: 80, height: 40 },
  seperator: { width: 1, height: 28, backgroundColor: '#E3E5E8', marginHorizontal: 8 },

  // kanban
  kanban: { width: '100%', flexDirection: 'row', gap: 12 },
  column: { flex: 1 },
})
