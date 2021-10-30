import styled from 'styled-components'
import Button from '../Button'

export const Wrapper = styled.div.attrs({
  'data-testid': 'SearchGithubUserFormWrapper',
})``

export const ButtonsWrapper = styled.div``

export const SearchUsersButton = styled(Button).attrs({
  style: 'primary',
})``

export const SearchUserButton = styled(Button).attrs({
  style: 'secondary',
})``
