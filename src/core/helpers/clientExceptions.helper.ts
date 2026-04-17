import { AxiosError } from 'axios'

export const handleClientExceptions = (error: unknown, source?: string) => {
  if (!error) return

  console.error(error, source)

  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError
    const err = axiosError.response?.data as any

    console.log(err?.message)
    // toastError({
    //   description: err?.message,
    // })
  }
}
