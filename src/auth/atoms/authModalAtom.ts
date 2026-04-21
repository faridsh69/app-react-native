import { atom } from '@/core/lib/jotai'

import { AUTH_STEPS } from '../constants/auth.constants'

export const DEFAULT_AUTH_MODAL_ATOM = {
  isOpen: false,
  step: AUTH_STEPS.enterEmail,
  email: '',
  password: '',
  username: '',
  age: false,
  newsletter: false,
  formIsValid: false,
}

export const authModalAtom = atom(DEFAULT_AUTH_MODAL_ATOM)
