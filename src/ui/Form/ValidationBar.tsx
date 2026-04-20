import { Text, View } from 'react-native'

import { formStyles, getColumnStyle } from './Form.styles'

type TypeFormProgress = { all: number; invalids: number }

export const ValidationBar = (props: TypeFormProgress) => {
  const { all, invalids } = props

  const roundNumber = (num?: number, digits = 2) => {
    if (!num) return 0

    const unit = Math.pow(10, digits)

    return Math.round(num * unit) / unit
  }

  const getValidationBarData = (all: number, invalids: number) => {
    const valids = Math.max(0, all - invalids)
    const percentage = all ? roundNumber((valids / all) * 100, 0) : invalids ? 0 : 100
    const isSuccess = percentage === 100
    const color = isSuccess ? 'var(--success)' : 'var(--error)'

    return {
      percentage,
      isSuccess,
      color,
    }
  }

  const { isSuccess, color, percentage } = getValidationBarData(all, invalids)

  return (
    <View
      style={{
        ...getColumnStyle(12),
        ...formStyles.validationBar,
        ...(isSuccess ? formStyles.validationSuccess : formStyles.validationDanger),
      }}
    >
      <View style={formStyles.flexRow}>
        <Text style={{ color }}>{isSuccess ? 'Completed' : `${invalids} errors`}</Text>
      </View>
      <View style={formStyles.flexRow}>
        <View style={formStyles.validationTrack}>
          <View
            style={{
              ...formStyles.validationFill,
              backgroundColor: color,
              width: `${percentage}%`,
            }}
          />
        </View>
        <Text style={{ color }}>{`${percentage}%`}</Text>
      </View>
    </View>
  )
}
