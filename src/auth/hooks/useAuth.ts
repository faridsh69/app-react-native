import { useAtom } from '@/core/lib/jotai'

import { authAtom } from '../atoms/authAtom'

export const useAuth = () => {
  const [auth] = useAtom(authAtom)

  return auth
}
