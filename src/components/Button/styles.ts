import styled from 'styled-components'
import { ButtonStyle } from '.'

export const Button = styled.button.attrs({
  'data-testid': 'Button',
})<{ customStyle: ButtonStyle }>``
