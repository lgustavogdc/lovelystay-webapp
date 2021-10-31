import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GithubUserList, { GithubUserListProps } from '.'

const mockedGithubUserListProps: GithubUserListProps = {
  users: [{ id: 1, login: 'anyLogin', name: 'anyName', avatar_url: 'anyUrl' }],
  onSelectUser: jest.fn(),
}
describe('<GithubUserList />', () => {
  it('should render the githubuserlist', () => {
    render(<GithubUserList {...mockedGithubUserListProps} />)
    const userList = screen.getByTestId('ListWrapper')

    expect(userList).toBeInTheDocument()
  })

  it('should call onSelectUser after clicking component', () => {
    const mockedOnSelectUser = jest.fn()
    render(<GithubUserList {...mockedGithubUserListProps} onSelectUser={mockedOnSelectUser} />)
    const user = screen.getByText('anyName').parentElement!

    userEvent.click(user)

    expect(mockedOnSelectUser).toBeCalledTimes(1)
  })

  it('should have the same children amount as users array length', () => {
    render(<GithubUserList {...mockedGithubUserListProps} />)
    const userList = screen.getByTestId('ListWrapper')

    expect(userList.childElementCount).toBe(1)
  })
})
