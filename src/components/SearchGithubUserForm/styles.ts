import styled from 'styled-components'
import Button from '../Button'

export const Wrapper = styled.div.attrs({
  'data-testid': 'SearchGithubUserFormWrapper',
})`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ButtonsWrapper = styled.div`
  margin-top: 10px;
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchUsersButton = styled(Button).attrs({
  customStyle: 'primary',
})``

export const SearchUserButton = styled(Button).attrs({
  customStyle: 'secondary',
})``
