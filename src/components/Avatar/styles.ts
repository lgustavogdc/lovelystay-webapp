import styled from 'styled-components'
import { AvatarStyle } from '.'

export const Avatar = styled.img.attrs({
  'data-testid': 'Avatar',
})<{ customStyle: AvatarStyle }>``
