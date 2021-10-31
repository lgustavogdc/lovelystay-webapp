import styled, { css } from 'styled-components'

export const InputWrapper = styled.div.attrs({
  'data-testid': 'InputWrapper',
})``

export const Input = styled.input.attrs({
  'data-testid': 'Input',
})<{ hasError: boolean }>`
  padding: 0.5em;
  width: 300px;
  margin: 0.5em;
  color: #878f9a;
  background: #0d1117;
  border: none;
  border-radius: 3px;

  ${({ hasError }) => css`
    ${hasError &&
    css`
      border: 2px solid red;
    `}
  `}
`

export const ErrorWrapper = styled.span.attrs({
  'data-testid': 'InputErrorWrapper',
})<{ hasError: boolean }>`
  ${({ hasError }) => css`
    ${hasError &&
    css`
      color: red;
    `}
  `}
`
