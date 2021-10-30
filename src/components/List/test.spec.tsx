import { render, screen } from '@testing-library/react'

import List, { ListProps } from '.'

const mockedListProps: ListProps = {
  nodes: [<span key="anyKey"></span>],
}

describe('<List />', () => {
  it('should render the list', () => {
    render(<List {...mockedListProps} />)
    const list = screen.getByTestId('ListWrapper')

    expect(list).toBeInTheDocument()
  })

  it('should have the same amout of children as the node array length', () => {
    render(<List {...mockedListProps} />)
    const list = screen.getByTestId('ListWrapper')

    expect(list.childElementCount).toBe(1)
  })
})
