import type { DimensionValue, TextStyle, ViewStyle } from 'react-native'

import { ColorsEnum } from '../theme/themeEnums'

const GRID_COLUMNS = 12
const GRID_GUTTER = 8

export const getColumnStyle = (columns = GRID_COLUMNS): ViewStyle => {
  const safeColumns = Math.min(Math.max(columns, 1), GRID_COLUMNS)
  const width = `${(safeColumns / GRID_COLUMNS) * 100}%` as DimensionValue

  return {
    flexBasis: width,
    flexGrow: 0,
    flexShrink: 0,
    maxWidth: width,
    paddingLeft: GRID_GUTTER,
    paddingRight: GRID_GUTTER,
    width,
  }
}

export const formStyles = {
  form: {
    width: '100%',
    maxWidth: '100%',
  } satisfies ViewStyle,
  row: {
    flexWrap: 'wrap',
    marginLeft: -GRID_GUTTER,
    marginRight: -GRID_GUTTER,
    rowGap: 12,
    flexDirection: 'row',
  } satisfies ViewStyle,
  inputWrapper: {
    flexDirection: 'column',
  } satisfies ViewStyle,
  inputComponent: {
    flexDirection: 'column',
  } satisfies ViewStyle,
  errorWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 23,
    paddingTop: 5,
  } satisfies ViewStyle,
  validationBar: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderWidth: 1,
  } satisfies ViewStyle,
  validationSuccess: {
    borderColor: ColorsEnum.Success,
  } satisfies ViewStyle,
  validationDanger: {
    borderColor: ColorsEnum.Error,
  } satisfies ViewStyle,
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  } satisfies ViewStyle,
  validationTrack: {
    width: 134,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  } satisfies ViewStyle,
  validationFill: {
    height: '100%',
    width: '0%',
    borderRadius: 7,
  } satisfies ViewStyle,
  groupsWrapper: {
    flexDirection: 'column',
    gap: 5,
    alignItems: 'flex-start',
    width: '100%',
    paddingVertical: 10,
  } satisfies ViewStyle,
  groups: {
    width: '100%',
    flexDirection: 'column',
    gap: 5,
  } satisfies ViewStyle,
  noItems: {
    paddingBottom: 20,
  } satisfies ViewStyle,
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
  } satisfies ViewStyle,
  groupInputs: {
    width: '90%',
  } satisfies ViewStyle,
  hasError: {
    color: ColorsEnum.Error,
    fontSize: 12,
    lineHeight: 16,
    minHeight: 16,
  } satisfies TextStyle,
} as const
