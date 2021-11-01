import { useState } from 'react'
import GithubUserList from 'src/components/GithubUserList'
import SearchGithubUserForm from 'src/components/SearchGithubUserForm'
import { GithubUser } from 'src/models/github'
import * as S from './styles'
import { useHistory } from 'react-router'
import { githubServiceFactory } from 'src/services/factories/github-service-factory'

const Home = () => {
  const [githubUsers, setGithubUsers] = useState<GithubUser[]>([])
  const history = useHistory()

  const selectUser = (route: string) => {
    history.push(route)
  }

  const searchUser = async (username: string) => {
    const githubService = githubServiceFactory()
    const user = await githubService.getUser(username)
    console.log('user', user)
    setGithubUsers([user])
  }

  const searchUsers = async (username: string) => {
    try {
      const githubService = githubServiceFactory()
      const usersPage = await githubService.getUsers(username)
      console.log('usersPage', usersPage)
      setGithubUsers(usersPage.users)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <S.Wrapper>
      <SearchGithubUserForm onSearchUser={searchUser} onSearchUsers={searchUsers} />
      <GithubUserList users={githubUsers} onSelectUser={selectUser} />
    </S.Wrapper>
  )
}

export default Home
