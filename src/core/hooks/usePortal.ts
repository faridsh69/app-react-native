import { useAuthPortal } from '@/auth/hooks/useAuthPortal'
import { useLocationPortal } from '@/location/hooks/useLocationPortal'

export const usePortal = () => {
  useLocationPortal()
  useAuthPortal()
}
