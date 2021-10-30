import styled from 'styled-components'
import { CustomStyle } from '.'

export const Wrapper = styled.div.attrs({
  'data-testid': 'ListWrapper',
})<{ customStyle: CustomStyle }>``
