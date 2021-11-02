import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import Pagination, { PaginationProps } from '.'

const mockedPaginationProps: PaginationProps = {
  totalItems: 100,
  itemsPerPage: 10,
  currentPage: 1,
  onChangePage: jest.fn(),
}

describe('<Pagination />', () => {
  it('should render the pagination', () => {
    render(<Pagination {...mockedPaginationProps} />)
    const pagination = screen.getByTestId('PaginationWrapper')

    expect(pagination).toBeInTheDocument()
  })

  it('should have specific disabled style', () => {
    render(<Pagination {...mockedPaginationProps} />)
    const firstPagePosition = screen.getByTestId('FirstPagePosition')

    expect(firstPagePosition).toHaveStyleRule('pointer-events', 'none')
    expect(firstPagePosition).toHaveStyleRule('cursor', 'default')
    expect(firstPagePosition).toHaveStyleRule('opacity', '0.5')
  })

  it('should execute change page event on click on last page position', () => {
    const mockedChangePage = jest.fn()
    render(<Pagination {...mockedPaginationProps} onChangePage={mockedChangePage} />)
    const lastPagePosition = screen.getByTestId('LastPagePosition')

    userEvent.click(lastPagePosition)

    expect(mockedChangePage).toBeCalledWith(10)
  })

  it('should execute change page event on click on first page position', () => {
    const mockedChangePage = jest.fn()
    render(<Pagination {...mockedPaginationProps} onChangePage={mockedChangePage} currentPage={10} />)
    const firstPagePosition = screen.getByTestId('FirstPagePosition')

    userEvent.click(firstPagePosition)

    expect(mockedChangePage).toBeCalledWith(1)
  })

  it('should execute change page event to first page on click when middle position is active', () => {
    const mockedChangePage = jest.fn()
    render(<Pagination {...mockedPaginationProps} onChangePage={mockedChangePage} currentPage={5} />)
    const pagePosition = screen.getByTestId('FirstPagePosition')

    userEvent.click(pagePosition)

    expect(mockedChangePage).toBeCalledWith(1)
  })

  it('should execute change page event to last page on click when middle position is active', () => {
    const mockedChangePage = jest.fn()
    render(<Pagination {...mockedPaginationProps} onChangePage={mockedChangePage} currentPage={5} />)
    const pagePosition = screen.getByTestId('LastPagePosition')

    userEvent.click(pagePosition)

    expect(mockedChangePage).toBeCalledWith(10)
  })

  it('should execute change page event on click go back button', () => {
    const mockedChangePage = jest.fn()
    render(<Pagination {...mockedPaginationProps} onChangePage={mockedChangePage} currentPage={5} />)
    const button = screen.getAllByRole('button')[0]

    userEvent.click(button)

    expect(mockedChangePage).toBeCalledWith(4)
  })
})

it('should execute change page event on click go forward button', () => {
  const mockedChangePage = jest.fn()
  render(<Pagination {...mockedPaginationProps} onChangePage={mockedChangePage} currentPage={5} />)
  const button = screen.getAllByRole('button')[1]

  userEvent.click(button)

  expect(mockedChangePage).toBeCalledWith(6)
})
