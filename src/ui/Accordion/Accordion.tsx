import { PropsWithChildren, useState } from 'react'
import { TouchableOpacity } from 'react-native'

import { IconSymbol } from '../Icon/icon-symbol'
import { Label } from '../Label/Label'
import { Container } from '../Views/Container'

export function Accordion({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <TouchableOpacity
        className='flex-row items-center gap-1.5'
        onPress={() => setIsOpen(value => !value)}
        activeOpacity={0.8}
      >
        <IconSymbol
          name='chevron.right'
          size={18}
          weight='medium'
          color={'black'}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <Label label={title} />
      </TouchableOpacity>
      {isOpen && <Container className='ml-6 mt-1.5'>{children}</Container>}
    </Container>
  )
}
