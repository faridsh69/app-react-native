import { PropsWithChildren, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { IconSymbol } from '../Icon/icon-symbol'
import { Label } from '../Label/Label'
import { Container } from '../Views/Container'

export function Accordion({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <TouchableOpacity style={styles.heading} onPress={() => setIsOpen(value => !value)} activeOpacity={0.8}>
        <IconSymbol
          name='chevron.right'
          size={18}
          weight='medium'
          color={'black'}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <Label label={title} />
      </TouchableOpacity>
      {isOpen && <Container style={styles.content}>{children}</Container>}
    </Container>
  )
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
})
