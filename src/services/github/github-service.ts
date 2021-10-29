import { GithubUser } from 'src/models/github'
import { HttpGet } from '../protocols/api'
import { GetGithubUser, GetGithubUsers } from '../protocols/github'

export class GithubService implements GetGithubUsers, GetGithubUser {
  constructor(private readonly httpService: HttpGet) {}

  async getUsers(username: string): Promise<GithubUser[]> {
    const queryFilter = `${username} in:login`
    const response = await this.httpService.get<GithubUser[]>({
      url: '/search/users',
      params: { q: queryFilter },
    })

    return response.body
  }

  async getUser(username: string): Promise<GithubUser> {
    const response = await this.httpService.get<GithubUser>({ url: `/users/${username}` })
    return response.body
  }
}
