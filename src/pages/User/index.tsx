import { useEffect, useState } from 'react'
import GithubUserInfo from 'src/components/GithubUserInfo'
import RepositoryList from 'src/components/RepositoryList'
import { GithubUser } from 'src/models/github'
import { Repository } from 'src/models/github/repository'
import { createGithubService } from 'src/services'
import * as S from './styles'

const User = () => {
  const username = window.location.pathname.replace('/user/', '')
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
      const githubService = createGithubService()
      const getUser = async () => {
        const specificUser = await githubService.getUser(username)
        setUser(specificUser)
      }

      const getRepositories = async () => {
        const repositories = await githubService.getGithubUserRepositories(`/users/${username}/repos`)
        setUserRepositories(repositories)
      }

      getUser()
      getRepositories()
    } catch (error) {
      console.log(error)
    }
  }, [username])

  return (
    <S.Wrapper>
      <GithubUserInfo
        avatar={user.avatar_url}
        name={user.name}
        username={user.login}
        totalRepositories={user.public_repos}
      />
      <RepositoryList repositories={userRepositories} />
    </S.Wrapper>
  )
}

export default User
