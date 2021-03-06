import styled, { css } from 'styled-components'
import { AvatarStyle } from '.'

export const Avatar = styled.img.attrs({
  'data-testid': 'Avatar',
})<{ customStyle: AvatarStyle }>`
  ${({ customStyle }) => css`
    border-radius: 50%;

    ${customStyle &&
    customStyle === 'small' &&
    css`
      height: 80px;
      width: 80px;
    `}

    ${customStyle &&
    customStyle === 'large' &&
    css`
      height: 260px;
      width: 260px;
    `}
  `}
`
