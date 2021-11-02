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

    ${customStyle === 'small' &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      text-align: center;
      border-radius: 50%;
      color: #005efe;
      height: 25px;
      width: 25px;
      background-color: #222a3f;
      &:hover {
        background-color: #4a4a59;
        transition: 0.5s background-color;
      }
    `}
  `}
`
