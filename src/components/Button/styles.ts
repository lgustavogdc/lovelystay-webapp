import styled, { css } from 'styled-components'
import { ButtonStyle } from '.'

export const Button = styled.button.attrs({
  'data-testid': 'Button',
})<{ customStyle: ButtonStyle }>`
  border: none;
  border-radius: 8px;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  ${({ customStyle }) => css`
    ${customStyle === 'primary' &&
    css`
      color: #fff;
      background-color: #005efe;
    `}

    ${customStyle === 'secondary' &&
    css`
      color: #2c5fbc;
      background-color: #222a3f;
    `}
  `}
`
