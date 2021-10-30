import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input, { InputProps } from '.'

const mockedProps: InputProps = {
  placeholder: 'anyPlaceholder',
  name: 'anyName',
  initialValue: 'anyValue',
  error: 'anyError',
}

describe('<Input />', () => {
  it('should render the input', () => {
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
})
