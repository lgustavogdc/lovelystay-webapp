import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button, { ButtonProps } from '.'

const buttonMockedProps: ButtonProps = {
  children: 'anyChildren',
}
describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button {...buttonMockedProps} />)
    const button = screen.getByTestId('Button')

    expect(button).toBeInTheDocument()
  })

  it('should call onClick function when is clicked', () => {
    const mockedOnClick = jest.fn()
    render(<Button {...buttonMockedProps} onClick={mockedOnClick} />)
    const button = screen.getByTestId('Button')

    userEvent.click(button)

    expect(mockedOnClick).toBeCalledTimes(1)
  })
})
