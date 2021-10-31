import { useState } from 'react'
import GithubUserList from 'src/components/GithubUserList'
import SearchGithubUserForm from 'src/components/SearchGithubUserForm'
import { githubServiceFactory } from 'src/services/factories/github-service-factory'
import { GithubUser } from 'src/models/github'
import * as S from './styles'

const Home = () => {
  const [githubUsers, setGithubUsers] = useState<GithubUser[]>([])

  const searchUser = async (username: string) => {
    const githubService = githubServiceFactory()
    const user = await githubService.getUser(username)
    setGithubUsers([user])
  }

  const searchUsers = async (username: string) => {
    const githubService = githubServiceFactory()
    const usersPage = await githubService.getUsers(username)
    setGithubUsers(usersPage.users)
  }

  const selectUser = () => {}

  return (
    <S.Wrapper>
      <SearchGithubUserForm onSearchUser={searchUser} onSearchUsers={searchUsers} />
      <GithubUserList users={githubUsers} onSelectUser={selectUser} />
    </S.Wrapper>
  )
}

export default Home
