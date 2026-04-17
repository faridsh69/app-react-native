import { useCrudLocationIp } from '@/apis/useCruds/locationCruds'
import { PAGES } from '@/core/constants/navigation.constants'
import { setLsCountry, setLsRegion } from '@/core/helpers/ls.helpers'
import { useAtom } from '@/core/lib/jotai'
import { OptionValueType } from '@/core/types/core.types'
import { REGIONS_LIST } from '@/location/constants/location.constants'
import { locationAtom } from '@/location/contexts/locationAtom'
import { AppSelect, Label } from '@/ui'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LocationPage() {
  const [locationModal, setLocationModal] = useAtom(locationAtom)
  const { region } = locationModal

  const { data: ipLocation, error } = useCrudLocationIp()

  console.log('1 xxx ipLocation', ipLocation, error)

  const handleChangeLocation = (value: OptionValueType) => {
    setLocationModal(p => ({ ...p, region: value as string }))
    setLsCountry('US')
    setLsRegion(value as string)
  }

  return (
    <SafeAreaView className='flex-1' edges={['top']}>
      <Label label='modal title' />
      <Label label='You are on our United States site' />
      <Label label='Set your shipping location for the best wine selection. Prices are in USD, and we ship within the United States only. For international shipping, please contact merchants directly.' />

      <AppSelect label='Shipping location' onChange={handleChangeLocation} options={REGIONS_LIST} value={region} />

      <Link href={PAGES.home.path as any} dismissTo className='mt-4 py-4'>
        <Label label='Back' />
      </Link>
    </SafeAreaView>
  )
}
