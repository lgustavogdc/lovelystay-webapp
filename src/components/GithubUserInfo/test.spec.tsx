import { render, screen } from '@testing-library/react'

import GithubUserInfo, { GithubUserInfoProps } from '.'

const mockedGithubUserInfoProps: GithubUserInfoProps = {
  name: 'anyName',
  username: 'anyUsername',
  totalRepositories: 1,
}

describe('<GithubUserInfo />', () => {
  it('should render the githubuserinfo', () => {
    render(<GithubUserInfo {...mockedGithubUserInfoProps} />)
    const userInfo = screen.getByTestId('GithubUserInfoWrapper')

    expect(userInfo).toBeInTheDocument()
  })

  it('should render avatar component if avatar prop is passed', () => {
    const mockedAvatar = 'anyAvatar'
    render(<GithubUserInfo {...mockedGithubUserInfoProps} avatar={mockedAvatar} />)
    const avatar = screen.getByTestId('Avatar')

    expect(avatar).toBeInTheDocument()
  })
})
