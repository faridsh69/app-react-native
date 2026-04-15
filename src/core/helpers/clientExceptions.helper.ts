import { AxiosError } from 'axios'

export const handleClientExceptions = (error: unknown, source?: string) => {
  if (!error) return

  console.error('*** CLIENT SIDE ERROR ***', error, source)

  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError
    const err = axiosError.response?.data as any

    console.log('axios error', err)
    // toastError({
    //   description: err?.message,
    // })
  }
}
