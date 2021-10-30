import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GithubUserSummary, { GithubUserSummaryProps } from '.'

const mockedGithubUserSummaryProps: GithubUserSummaryProps = {
  username: 'anyUsername',
  name: 'anyName',
  email: 'anyEmail',
}

describe('<GithubUserListItem />', () => {
  it('should render the githubUserSummary', () => {
    render(<GithubUserSummary {...mockedGithubUserSummaryProps} />)
    const githubUserSummary = screen.getByTestId('GithubUserSummaryWrapper')

    expect(githubUserSummary).toBeInTheDocument()
  })

  it('should call on click function when is clicked', () => {
    const mockedOnClick = jest.fn()
    render(<GithubUserSummary {...mockedGithubUserSummaryProps} onClick={mockedOnClick} />)
    const githubUserSummary = screen.getByTestId('GithubUserSummaryWrapper')

    userEvent.click(githubUserSummary)

    expect(mockedOnClick).toBeCalledTimes(1)
  })

  it('should render avatar component if avatar prop is passed', () => {
    const mockedAvatar = 'anyAvatar'
    render(<GithubUserSummary {...mockedGithubUserSummaryProps} avatar={mockedAvatar} />)
    const avatar = screen.getByTestId('GithubUserSummaryAvatar')

    expect(avatar).toBeInTheDocument()
  })
})
