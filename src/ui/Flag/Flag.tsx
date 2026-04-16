import { CountriesEnum } from '../theme/enums'
import FranceFlag from './flags/FranceFlag'

type FlagProps = {
  country: CountriesEnum
  width?: number | string
}

export const Flag = (props: FlagProps) => {
  const { country, width = 18 } = props

  const mapping = {
    [CountriesEnum.Fr]: FranceFlag,
    // [CountriesEnum.It]: italyFlag,
    // [CountriesEnum.Us]: UsFlag,
    // [CountriesEnum.Cl]: ClFlag,
    // [CountriesEnum.Sp]: SpFlag,
    // [CountriesEnum.Au]: AuFlag,
  }

  const src = mapping[country]
  if (!src) return null

  return <img src={src} alt={country} width={width} />
}
