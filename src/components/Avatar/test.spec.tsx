import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Avatar, { AvatarProps } from '.'

const mockedAvatarProps: AvatarProps = {
  image: 'anyImage',
  alt: 'anyAlt',
}

describe('<Avatar />', () => {
  it('should render the avatar', () => {
    render(<Avatar {...mockedAvatarProps} />)
    const avatar = screen.getByTestId('Avatar')

    expect(avatar).toBeInTheDocument()
  })

  it('should have a different style depending on custom styleProp', () => {
    render(<Avatar {...mockedAvatarProps} customStyle="large" />)
    const avatar = screen.getByTestId('Avatar')

    expect(avatar).toHaveStyleRule('height', '260px')
    expect(avatar).toHaveStyleRule('width', '260px')
  })
})
