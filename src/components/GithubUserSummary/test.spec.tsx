import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GithubUserSummary, { GithubUserSummaryProps } from '.'

const mockedGithubUserSummaryProps: GithubUserSummaryProps = {
  username: 'anyUsername',
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
    const avatar = screen.getByTestId('Avatar')

    expect(avatar).toBeInTheDocument()
  })

  it('should render name if name prop is passed', () => {
    const mockedName = 'anyName'
    render(<GithubUserSummary {...mockedGithubUserSummaryProps} name={mockedName} />)
    const name = screen.getByTestId('GithubUserSummarySubtitle')

    expect(name).toBeInTheDocument()
  })
})
