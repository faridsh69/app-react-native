import type { CSSProperties } from 'react'

const GRID_COLUMNS = 12
const GRID_GUTTER = 8

export const getColumnStyle = (columns = GRID_COLUMNS): CSSProperties => {
  const safeColumns = Math.min(Math.max(columns, 1), GRID_COLUMNS)
  const width = `${(safeColumns / GRID_COLUMNS) * 100}%`

  return {
    boxSizing: 'border-box',
    flex: `0 0 ${width}`,
    maxWidth: width,
    paddingLeft: GRID_GUTTER,
    paddingRight: GRID_GUTTER,
    width: '100%',
  }
}

export const formStyles = {
  form: {
    width: '100%',
    maxWidth: '100%',
  } satisfies CSSProperties,
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -GRID_GUTTER,
    marginRight: -GRID_GUTTER,
    rowGap: 12,
  } satisfies CSSProperties,
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
  } satisfies CSSProperties,
  inputComponent: {
    display: 'flex',
    flexDirection: 'column',
  } satisfies CSSProperties,
  errorWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 23,
    paddingTop: 5,
  } satisfies CSSProperties,
  validationBar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderRadius: 6,
    padding: '7px 10px',
  } satisfies CSSProperties,
  validationSuccess: {
    color: 'var(--success)',
    border: '1px solid var(--success)',
  } satisfies CSSProperties,
  validationDanger: {
    color: 'var(--error)',
    border: '1px solid var(--error)',
  } satisfies CSSProperties,
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  } satisfies CSSProperties,
  validationTrack: {
    width: 134,
    height: 14,
    borderRadius: 7,
    background: 'rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  } satisfies CSSProperties,
  validationFill: {
    height: '100%',
    width: '0%',
    borderRadius: 7,
  } satisfies CSSProperties,
  groupsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    alignItems: 'flex-start',
    width: '100%',
    padding: '10px 0',
  } satisfies CSSProperties,
  groups: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  } satisfies CSSProperties,
  noItems: {
    paddingBottom: 20,
  } satisfies CSSProperties,
  group: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 8,
    padding: '15px 20px',
  } satisfies CSSProperties,
  groupInputs: {
    width: '100%',
  } satisfies CSSProperties,
  hasError: {
    color: 'var(--error)',
    fontSize: 12,
    lineHeight: '16px',
    minHeight: 16,
  } satisfies CSSProperties,
} as const
