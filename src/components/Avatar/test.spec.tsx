import { render, screen } from '@testing-library/react'

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
})
