import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #fff;
  width: 200px;
`

export const PagePosition = styled.span<{ disabled?: boolean }>`
  ${({ disabled }) => css`
    border-radius: 50%;
    cursor: pointer;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${!disabled &&
    css`
      &:hover {
        background-color: #4a4a59;
        transition: 0.5s background-color;
      }
    `}

    ${disabled &&
    css`
      pointer-events: none;
      cursor: default;
      opacity: 0.5;
    `}
  `}
`
