import styled, { css } from 'styled-components'
import { CustomStyle } from '.'

export const Wrapper = styled.div.attrs({
  'data-testid': 'ListWrapper',
})<{ customStyle: CustomStyle }>`
  ${({ customStyle }) => css`
    ${customStyle === 'lines' &&
    css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
    ${customStyle === 'grid' &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px 30px;

      @media (max-width: 375px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 5px 15px;
      }
    `}
  `}
`
