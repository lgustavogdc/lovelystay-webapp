import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import Input, { InputProps } from '.'

const mockedProps: InputProps = {
  placeholder: 'anyPlaceholder',
  name: 'anyName',
  initialValue: 'anyValue',
  error: 'anyError',
}

describe('<Input />', () => {
  it('should render the inpu t', () => {
    render(<Input {...mockedProps} />)
    const inputWrapper = screen.getByTestId('InputWrapper')

    expect(inputWrapper).toBeInTheDocument()
  })

  it('should call onChange when input value changes', () => {
    const onChangeMocked = jest.fn()
    render(<Input {...mockedProps} onChange={onChangeMocked} />)
    const input = screen.getByTestId('Input')

    userEvent.clear(input)
    userEvent.type(input, 'mocked text')

    expect(onChangeMocked).toHaveBeenCalledWith('mocked text')
  })

  it('should have different style if has an error', () => {
    render(<Input {...mockedProps} error="anyError" />)
    const input = screen.getByTestId('Input')
    const errorWrapper = screen.getByTestId('InputErrorWrapper')

    expect(input).toHaveStyleRule('border', '2px solid red')
    expect(errorWrapper).toHaveStyleRule('color', 'red')
  })
})
