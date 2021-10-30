import { render, screen } from '@testing-library/react'

import GithubUserDescription, { GithubUserDescriptionProps } from '.'

const mockedGithubDescriptionProps: GithubUserDescriptionProps = {
  name: 'anyName',
  username: 'anyUsername',
  totalRepositories: 1,
}

describe('<GithubUserDescription />', () => {
  it('should render the githubuserdescription', () => {
    render(<GithubUserDescription {...mockedGithubDescriptionProps} />)
    const userDescription = screen.getByTestId('GithubUserDescriptionWrapper')

    expect(userDescription).toBeInTheDocument()
  })
})
