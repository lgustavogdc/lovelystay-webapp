import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchGithubUserForm, { SearchGithubUserFormProps } from '.'

const mockedSearchGithubUserFormProps: SearchGithubUserFormProps = {
  onSearchUser: jest.fn(),
  onSearchUsers: jest.fn(),
}

describe('<SearchGithubUserForm />', () => {
  it('should render the searchgithubuserform', () => {
    render(<SearchGithubUserForm {...mockedSearchGithubUserFormProps} />)
    const form = screen.getByTestId('SearchGithubUserFormWrapper')

    expect(form).toBeInTheDocument()
  })

  it('should call onSearchUser function with correct value when onSearchUser button is clicked', () => {
    const mockedSearchUser = jest.fn()
    render(<SearchGithubUserForm {...mockedSearchGithubUserFormProps} onSearchUser={mockedSearchUser} />)
    const searchUserButton = screen.getByText('Search specific user')
    const input = screen.getByTestId('Input')

    userEvent.type(input, 'anyValue')
    userEvent.click(searchUserButton)

    expect(mockedSearchUser).toHaveBeenCalledWith('anyValue')
  })

  it('should call onSearchUsers function with correct value when onSearchUsers button is clicked', () => {
    const mockedSearchUsers = jest.fn()
    render(<SearchGithubUserForm {...mockedSearchGithubUserFormProps} onSearchUsers={mockedSearchUsers} />)
    const searchUsersButton = screen.getByText('Search users')
    const input = screen.getByTestId('Input')

    userEvent.type(input, 'anyValue')
    userEvent.click(searchUsersButton)

    expect(mockedSearchUsers).toHaveBeenCalledWith('anyValue')
  })
})
