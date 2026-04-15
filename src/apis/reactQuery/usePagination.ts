import { useEffect, useState } from 'react'
import { useElementVisibility } from '@/core/hooks/useElementVisibility'

import { PER_PAGE } from '../constants/api.constants'

export const usePagination = (listLength: number, perPage = PER_PAGE) => {
  const [page, setPage] = useState(1)
  const [showDivLocatedAtBottomOfPage, setShowDivLocatedAtBottomOfPage] = useState(false)
  const [updatingPage, setUpdatingPage] = useState(false)
  const { ref: divLocatedAtBottomOfPageRef, isVisible } = useElementVisibility({})

  useEffect(() => {
    if (!updatingPage) return

    setPage(page + 1)

    setTimeout(() => {
      setUpdatingPage(false)
    }, 500)
  }, [updatingPage])

  useEffect(() => {
    if (listLength > perPage - 1) {
      setShowDivLocatedAtBottomOfPage(true)
    }

    const isDataMultipleOfPagination = listLength % perPage === 0
    const isCountIsCorrectToUpdatePage = listLength === page * perPage

    if (!isVisible || !isDataMultipleOfPagination || !isCountIsCorrectToUpdatePage) return

    setUpdatingPage(true)
  }, [listLength, updatingPage, isVisible])

  const resetPagination = () => {
    setPage(1)
  }

  return { divLocatedAtBottomOfPageRef, page, resetPagination, showDivLocatedAtBottomOfPage }
}
