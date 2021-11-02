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
        color: #005efe;
        transition: 0.5s color;
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
