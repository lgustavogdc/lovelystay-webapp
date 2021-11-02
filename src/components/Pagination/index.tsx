import Button from '../Button'
import * as S from './styles'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useEffect, useState } from 'react'

type CurrentPagePosition = 'firstPage' | 'lastPage' | 'middlePage'
export type PaginationProps = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onChangePage: (page: number) => void
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, onChangePage }: PaginationProps) => {
  const [currentPagePosition, setCurrentPagePosition] = useState<CurrentPagePosition>()
  const [lastPage, setLastPage] = useState<number>()

  useEffect(() => {
    const calculatedLastPage = Math.ceil(totalItems / itemsPerPage)
    setLastPage(calculatedLastPage)
    if (currentPage === 1) setCurrentPagePosition('firstPage')
    else if (currentPage === calculatedLastPage) setCurrentPagePosition('lastPage')
    else setCurrentPagePosition('middlePage')
  }, [currentPage, itemsPerPage, totalItems])

  return (
    <S.Wrapper data-testid="PaginationWrapper">
      <Button
        disabled={currentPagePosition === 'firstPage'}
        customStyle="small"
        onClick={() => onChangePage(currentPage - 1)}
      >
        <AiFillCaretLeft size="15" />
      </Button>
      {currentPagePosition === 'middlePage' ? (
        <S.Wrapper data-testid="MiddlePagePositionWrapper">
          <S.PagePosition onClick={() => onChangePage(1)} data-testid="FirstPagePosition">
            1
          </S.PagePosition>
          ..
          <S.PagePosition disabled data-testid="MiddlePagePosition">
            {currentPage}
          </S.PagePosition>{' '}
          ..
          <S.PagePosition onClick={() => onChangePage(lastPage!)} data-testid="LastPagePosition">
            {lastPage}
          </S.PagePosition>
        </S.Wrapper>
      ) : (
        <S.Wrapper data-testid="EdgePagePositionWrapper">
          <S.PagePosition
            disabled={currentPagePosition === 'firstPage'}
            data-testid="FirstPagePosition"
            onClick={() => onChangePage(1)}
          >
            1
          </S.PagePosition>
          ....
          <S.PagePosition
            disabled={currentPagePosition === 'lastPage'}
            data-testid="LastPagePosition"
            onClick={() => onChangePage(lastPage!)}
          >
            {lastPage}
          </S.PagePosition>
        </S.Wrapper>
      )}
      <Button
        disabled={currentPagePosition === 'lastPage'}
        customStyle="small"
        onClick={() => onChangePage(currentPage + 1)}
      >
        <AiFillCaretRight size="15" />
      </Button>
    </S.Wrapper>
  )
}

export default Pagination
