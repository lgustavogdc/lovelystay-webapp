import styled, { css } from 'styled-components'
import { CustomStyle } from '.'

export const Wrapper = styled.div.attrs({
  'data-testid': 'ListWrapper',
})<{ customStyle: CustomStyle }>`
  ${({ customStyle }) => css`
    ${customStyle === 'grid' &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    `}
  `}
`
