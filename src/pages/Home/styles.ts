import styled from 'styled-components'

export const Wrapper = styled.main.attrs({
  'data-testid': 'HomeWrapper',
})``

export const LoadingWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserListWrapper = styled.div.attrs({
  'data-testid': 'UserListWrapper',
})`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
