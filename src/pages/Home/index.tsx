import { useState } from 'react'
import GithubUserList from 'src/components/GithubUserList'
import SearchGithubUserForm from 'src/components/SearchGithubUserForm'
import { GithubUser } from 'src/models/github'
import * as S from './styles'
import { useHistory } from 'react-router'
import { githubServiceFactory } from 'src/services/factories/github-service-factory'
import Loading from 'src/components/Loading'

const Home = () => {
  const [githubUsers, setGithubUsers] = useState<GithubUser[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const selectUser = (route: string) => {
    history.push(route)
  }

  const searchUser = async (username: string) => {
    try {
      setIsLoading(true)
      const githubService = githubServiceFactory()
      const user = await githubService.getUser(username)
      setGithubUsers([user])
    } catch (error: any) {
      console.error(error)
      setErrorMessage(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

  const searchUsers = async (username: string) => {
    try {
      setIsLoading(true)
      const githubService = githubServiceFactory()
      const usersPage = await githubService.getUsers(username)
      setGithubUsers(usersPage.users)
      if (errorMessage) setErrorMessage('')
    } catch (error: any) {
      console.error(error)
      setErrorMessage(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <SearchGithubUserForm onSearchUser={searchUser} onSearchUsers={searchUsers} error={errorMessage} />
      {isLoading ? (
        <S.LoadingWrapper>
          <Loading />
        </S.LoadingWrapper>
      ) : (
        <S.UserListWrapper>
          <GithubUserList users={githubUsers} onSelectUser={selectUser} />
        </S.UserListWrapper>
      )}
    </S.Wrapper>
  )
}

export default Home
