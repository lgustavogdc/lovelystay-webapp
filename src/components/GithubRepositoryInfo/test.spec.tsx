import { render, screen } from '@testing-library/react'

import GithubRepositoryInfo, { GithubRepositoryInfoProps } from '.'

const mockedGithubRepositoryProps: GithubRepositoryInfoProps = {
  name: 'anyName',
}

describe('<GithubRepositoryInfo />', () => {
  it('should render the githubrepositoryinfo', () => {
    render(<GithubRepositoryInfo {...mockedGithubRepositoryProps} />)
    const repositoryInfo = screen.getByTestId('GithubRepositoryInfoWrapper')

    expect(repositoryInfo).toBeInTheDocument()
  })

  it('should render the repository description if prop is passed', () => {
    const mockedDescription = 'anyDescription'
    render(<GithubRepositoryInfo {...mockedGithubRepositoryProps} description={mockedDescription} />)
    const repositoryDescription = screen.getByTestId('GithubRepositoryDescription')

    expect(repositoryDescription).toBeInTheDocument()
  })
})
