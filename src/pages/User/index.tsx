import { useEffect, useState } from 'react'
import GithubUserInfo from 'src/components/GithubUserInfo'
import RepositoryList from 'src/components/RepositoryList'
import { GithubUser } from 'src/models/github'
import { Repository } from 'src/models/github/repository'
import { createGithubService } from 'src/services'
import Loading from 'src/components/Loading'
import * as S from './styles'

const User = () => {
  const username = window.location.pathname.replace('/user/', '')
  const [isLoading, setIsLoading] = useState(false)
  const [userRepositories, setUserRepositories] = useState<Repository[]>([])
  const [user, setUser] = useState<Pick<GithubUser, 'id' | 'login' | 'name' | 'avatar_url' | 'public_repos'>>({
    login: '',
    id: null,
    avatar_url: '',
    name: '',
    public_repos: null,
  })

  useEffect(() => {
    try {
      setIsLoading(true)
      const githubService = createGithubService()
      const getUser = async () => {
        const specificUser = await githubService.getUser(username)
        setUser(specificUser)
      }

      const getRepositories = async () => {
        const repositories = await githubService.getGithubUserRepositories(`/users/${username}/repos`)
        setUserRepositories(repositories)
        setIsLoading(false)
      }

      getUser()
      getRepositories()
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }, [username])

  return (
    <S.Wrapper>
      {isLoading ? (
        <Loading />
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
    </S.Wrapper>
  )
}

export default User
