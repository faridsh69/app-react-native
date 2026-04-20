import { atom } from '@/core/lib/jotai'
import { TypeUser } from '@/core/types/core.types'

type AuthAtomType = {
  bearerToken: string
  refreshToken: string
  user: TypeUser | null
  isLoggedIn: boolean
}

export const EMPTY_AUTH_ATOM: AuthAtomType = {
  bearerToken: '',
  refreshToken: '',
  user: null,
  isLoggedIn: false,
}

export const authAtom = atom<AuthAtomType>(EMPTY_AUTH_ATOM)
