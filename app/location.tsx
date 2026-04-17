import { useCrudLocationIp } from '@/apis/useCruds/locationCruds'
import { PAGES } from '@/core/constants/navigation.constants'
import { setLsCountry, setLsRegion } from '@/core/helpers/ls.helpers'
import { OptionValueType } from '@/core/types/core.types'
import { REGIONS_LIST } from '@/location/constants/location.constants'
import { locationAtom } from '@/location/contexts/locationAtom'
import { AppSelect, Label } from '@/ui'
import { Link } from 'expo-router'
import { useAtom } from 'jotai'
import { StyleSheet } from 'react-native'
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

      <Link href={PAGES.home.path as any} dismissTo style={styles.link}>
        <Label label='Back' />
      </Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
