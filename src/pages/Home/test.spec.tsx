import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '.'

describe('<SearchGithubUserForm />', () => {
  it('should render the HomePage', () => {
    render(<Home />)
    const home = screen.getByTestId('HomeWrapper')

    expect(home).toBeInTheDocument()
  })

  it('should show a user summary after clicking the search specific user button', async () => {
    render(<Home />)
    const input = screen.getByTestId('Input')
    const searchUserButton = screen.getByText('Search specific user')
    userEvent.type(input, 'lgustavogdc')

    fireEvent.click(searchUserButton)
    await waitFor(() => screen.getByTestId('UserListWrapper'))

    expect(screen.getByTestId('GithubUserSummaryWrapper')).toBeInTheDocument()
  })

  it('should show the user list wrapper after clicking the search users button', async () => {
    render(<Home />)
    const input = screen.getByTestId('Input')
    const searchUserButton = screen.getByText('Search users')
    userEvent.type(input, 'gustavo')

    fireEvent.click(searchUserButton)
    await waitFor(() => screen.getByTestId('UserListWrapper'))

    expect(screen.getByTestId('UserListWrapper')).toBeInTheDocument()
  })
})
