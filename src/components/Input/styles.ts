import styled, { css } from 'styled-components'

export const InputWrapper = styled.div.attrs({
  'data-testid': 'InputWrapper',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input.attrs({
  'data-testid': 'Input',
})<{ hasError: boolean }>`
  padding: 0.5em;
  width: 400px;
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
  height: 25px;
  ${({ hasError }) => css`
    ${hasError &&
    css`
      color: red;
    `}
  `}
`
