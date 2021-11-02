import { useState } from 'react'
import GithubUserList from 'src/components/GithubUserList'
import SearchGithubUserForm from 'src/components/SearchGithubUserForm'
import { GithubUser } from 'src/models/github'
import * as S from './styles'
import { useHistory } from 'react-router'
import { githubServiceFactory } from 'src/services/factories/github-service-factory'
import Loading from 'src/components/Loading'
import Pagination from 'src/components/Pagination'

type GithubUsersListType = {
  searchedName: string
  users: Array<GithubUser>
}
const Home = () => {
  const [githubUsers, setGithubUsers] = useState<GithubUsersListType>({
    searchedName: '',
    users: [],
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalItems, setTotalItems] = useState<number>()
  const history = useHistory()

  const selectUser = (route: string) => {
    history.push(route)
  }

  const selectPage = async (page: number) => {
    setCurrentPage(page)
    try {
      const githubService = githubServiceFactory()
      const usersPage = await githubService.getUsers(githubUsers.searchedName, page)
      setGithubUsers((oldState) => ({ ...oldState, users: usersPage.users }))
      if (errorMessage) setErrorMessage('')
    } catch (error: any) {
      console.error(error)
      setErrorMessage(error.toString())
    }
  }

  const searchUsers = async (username: string) => {
    try {
      setIsLoading(true)
      const githubService = githubServiceFactory()
      const usersPage = await githubService.getUsers(username, currentPage)
      if (usersPage) {
        setGithubUsers({ searchedName: username, users: usersPage.users })

        if (usersPage.total >= 1000) setTotalItems(1000)
        else setTotalItems(usersPage.total)
      }
      if (errorMessage) setErrorMessage('')
    } catch (error: any) {
      console.error(error)
      setErrorMessage(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

  const searchUser = async (username: string) => {
    try {
      setIsLoading(true)
      const githubService = githubServiceFactory()
      const user = await githubService.getUser(username)
      if (user) selectUser(`user/${user.login}`)
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
      {!isLoading && totalItems && (
        <S.PaginationWrapper>
          <Pagination totalItems={totalItems!} itemsPerPage={30} currentPage={currentPage} onChangePage={selectPage} />
        </S.PaginationWrapper>
      )}
      {isLoading ? (
        <S.LoadingWrapper>
          <Loading />
        </S.LoadingWrapper>
      ) : (
        <S.UserListWrapper>
          <GithubUserList users={githubUsers.users} onSelectUser={selectUser} />
        </S.UserListWrapper>
      )}
      {!isLoading && totalItems && (
        <S.PaginationWrapper>
          <Pagination totalItems={totalItems!} itemsPerPage={30} currentPage={currentPage} onChangePage={selectPage} />
        </S.PaginationWrapper>
      )}
    </S.Wrapper>
  )
}

export default Home
