import { render, screen } from '@testing-library/react'

import RepositoryList, { GithubRepositoryListProps } from '.'

const mockedRepositoryListProps: GithubRepositoryListProps = {
  repositories: [{ id: 1, name: 'anyName', description: 'anyDescription' }],
}
describe('<RepositoryList />', () => {
  it('should render the repositorylist', () => {
    render(<RepositoryList {...mockedRepositoryListProps} />)
    const repositoryList = screen.getByTestId('ListWrapper')

    expect(repositoryList).toBeInTheDocument()
  })

  it('should have the same children amount as repositories array length', () => {
    render(<RepositoryList {...mockedRepositoryListProps} />)
    const repositoryList = screen.getByTestId('ListWrapper')

    expect(repositoryList.childElementCount).toBe(1)
  })
})
