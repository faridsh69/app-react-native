import { useAuth } from '@/auth/hooks/useAuth'
import { useLocation } from '@/location/hooks/useLocation'

export const usePortal = () => {
  useLocation()
  useAuth()
}
