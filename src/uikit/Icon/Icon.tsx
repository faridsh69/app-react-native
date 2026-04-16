import React from 'react'
import { ColorsEnum, SizesEnum } from '@/ui/enums'
import { FontAwesome } from '@expo/vector-icons'
import Svg from 'react-native-svg'

import { FontAwesomeMapping, sizeMapping, svgMapping } from './Icon.constants'
import { IconProps } from './Icon.types'

export const Icon = (props: IconProps) => {
  const { icon, size = SizesEnum.M, color = ColorsEnum.Black, className, style } = props

  if (!icon) return <></>

  const svgData = svgMapping[icon]
  const height = sizeMapping[size]

  if (svgData) {
    const { Svg: SvgIcon, viewBox } = svgData
    const [svgWidth] = viewBox.split(' ').map(Number)

    return (
      <Svg
        viewBox={`0 0 ${viewBox}`}
        style={style}
        width={svgWidth}
        height={height}
        preserveAspectRatio='http://www.w3.org/2000/svg'
        fill={'transparent'}
        className={className}
      >
        <SvgIcon />
      </Svg>
    )
  }

  const faName = FontAwesomeMapping[icon]
  if (faName) return <FontAwesome name={faName} size={height} color={color} style={style} />
}
