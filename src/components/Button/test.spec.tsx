import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
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

  it('should have a different style depending on custom styleProp', () => {
    render(<Button {...buttonMockedProps} customStyle="secondary" />)
    const button = screen.getByTestId('Button')

    expect(button).toHaveStyleRule('color', '#2c5fbc')
    expect(button).toHaveStyleRule('background-color', '#222a3f')
  })
})
