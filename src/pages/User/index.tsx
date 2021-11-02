import { useEffect, useState } from 'react'
import GithubUserInfo from 'src/components/GithubUserInfo'
import RepositoryList from 'src/components/RepositoryList'
import { GithubUser } from 'src/models/github'
import { Repository } from 'src/models/github/repository'
import { createGithubService } from 'src/services'
import Loading from 'src/components/Loading'
import * as S from './styles'
import Pagination from 'src/components/Pagination'

const User = () => {
  const username = window.location.pathname.replace('/user/', '')
  const [isLoading, setIsLoading] = useState(false)
  const [userRepositories, setUserRepositories] = useState<Repository[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [user, setUser] = useState<Pick<GithubUser, 'id' | 'login' | 'name' | 'avatar_url' | 'public_repos'>>({
    login: '',
    id: null,
    avatar_url: '',
    name: '',
    public_repos: null,
  })

  useEffect(() => {
    try {
      if (!user.login) setIsLoading(true)
      const githubService = createGithubService()
      const getUser = async () => {
        const specificUser = await githubService.getUser(username)
        setUser(specificUser)
      }

      const getRepositories = async () => {
        const repositories = await githubService.getGithubUserRepositories(`/users/${username}/repos`, currentPage)
        setUserRepositories(repositories)
        if (!user.login) setIsLoading(false)
      }

      if (!user.login) getUser()
      getRepositories()
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }, [username, currentPage, user.login])

  const selectPage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <S.Wrapper>
      {isLoading ? (
        <S.LoadingWrapper>
          <Loading />
        </S.LoadingWrapper>
      ) : (
        <S.InfoWrapper>
          <GithubUserInfo
            avatar={user.avatar_url}
            name={user.name}
            username={user.login}
            totalRepositories={user.public_repos}
          />
          <RepositoryList repositories={userRepositories} />
        </S.InfoWrapper>
      )}
      {!isLoading && user.public_repos && (
        <S.PaginationWrapper>
          <Pagination
            totalItems={user.public_repos!}
            itemsPerPage={30}
            currentPage={currentPage}
            onChangePage={selectPage}
          />
        </S.PaginationWrapper>
      )}
    </S.Wrapper>
  )
}

export default User
