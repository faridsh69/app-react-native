// import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock next/router for tests
const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  prefetch: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  reload: vi.fn(),
  beforePopState: vi.fn(),
  events: {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  },
  isReady: true,
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
}

vi.mock('next/router', () => ({
  default: mockRouter,
  useRouter: () => mockRouter,
}))

// Mock next/navigation for App Router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
  notFound: vi.fn(),
  redirect: vi.fn(),
}))

// Mock environment variables
if (typeof process !== 'undefined' && process.env) {
  Object.defineProperty(process.env, 'NODE_ENV', {
    value: 'test',
    writable: true,
    configurable: true,
    enumerable: true,
  })
}
