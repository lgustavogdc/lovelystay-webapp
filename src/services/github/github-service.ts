import { GithubUser } from 'src/models/github'
import { Repository } from 'src/models/github/repository'
import { HttpGet } from '../protocols/api'
import { GetGithubUser, GetGithubUsers, GetGithubUserRepositories } from '../protocols/github'

type GithubHttpGetResponse = {
  incomplete_results: boolean
  items: GithubUser[]
  total_count: number
}

export class GithubService implements GetGithubUsers, GetGithubUser, GetGithubUserRepositories {
  constructor(private readonly httpService: HttpGet) {}

  async getUsers(username: string, page = 1): Promise<GetGithubUsers.Response> {
    const queryFilter = `${username} in:login`
    const response = await this.httpService.get<GithubHttpGetResponse>({
      url: '/search/users',
      params: { q: queryFilter, page },
    })

    return { users: response.body.items, total: response.body.total_count }
  }

  async getUser(username: string): Promise<GithubUser> {
    const response = await this.httpService.get<GithubUser>({ url: `/users/${username}` })
    return response.body
  }

  async getGithubUserRepositories(url: string, page = 1): Promise<Repository[]> {
    const response = await this.httpService.get<Repository[]>({ url, params: { page } })
    return response.body
  }
}
