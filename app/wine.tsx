import { Label, ParallaxScrollView } from '@/ui'
import { Image } from 'expo-image'

export default function WinePage() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/partial-react-logo.png')}
          className='absolute bottom-0 left-0 h-[178px] w-[290px]'
        />
      }
    >
      <Label label='Welcome' />
    </ParallaxScrollView>
  )
}
