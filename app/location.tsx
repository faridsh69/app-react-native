import { PAGES } from '@/core/constants/navigation.constants'
import { setLsCountry, setLsRegion } from '@/core/helpers/ls.helpers'
import { useAtom } from '@/core/lib/jotai'
import { OptionValueType } from '@/core/types/core.types'
import { REGIONS_LIST } from '@/location/constants/location.constants'
import { locationAtom } from '@/location/contexts/locationAtom'
import { AppSelect, FontsEnum, Label } from '@/ui'
import { Link, useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LocationPage() {
  const [locationModal, setLocationModal] = useAtom(locationAtom)
  const { region } = locationModal

  const { navigate } = useNavigation()

  const handleChangeLocation = (value: OptionValueType) => {
    setLocationModal(p => ({ ...p, region: value as string }))
    setLsCountry('US')
    setLsRegion(value as string)
    navigate(PAGES.home.name as any)
  }

  return (
    <SafeAreaView
      className='flex flex-col items-center justify-center gap-5 mt-10 p-5'
      edges={['top']}
    >
      <Label
        label='You are on our United States site'
        textAlign='center'
        font={FontsEnum.Label20}
        linesCount={2}
      />
      <Label
        label='Set your shipping location for the best wine selection. Prices are in USD, and we ship within the United States only. For international shipping, please contact merchants directly.'
        textAlign='center'
        font={FontsEnum.Text18}
        linesCount={5}
      />
      <AppSelect
        label='Shipping location'
        onChange={handleChangeLocation}
        options={REGIONS_LIST}
        value={region}
      />
      <Link href={PAGES.home.name as any} dismissTo className='mt-4 py-4'>
        <Label label='Back' />
      </Link>
    </SafeAreaView>
  )
}
