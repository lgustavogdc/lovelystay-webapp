import { useState } from 'react'
import Input from '../Input'
import * as S from './styles'

export type SearchGithubUserFormProps = {
  onSearchUsers: (partialUsername: string) => void
  onSearchUser: (username: string) => void
  error?: string
}

const SearchGithubUserForm = ({ onSearchUser, onSearchUsers, error }: SearchGithubUserFormProps) => {
  const [username, setUserName] = useState('')

  return (
    <S.Wrapper>
      <Input placeholder="Search..." onChange={(value) => setUserName(value)} error={error} value={username} />
      <S.ButtonsWrapper>
        <S.SearchUsersButton onClick={() => onSearchUsers(username)}>Search users</S.SearchUsersButton>
        <S.SearchUserButton onClick={() => onSearchUser(username)}>Search specific user</S.SearchUserButton>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
export default SearchGithubUserForm
