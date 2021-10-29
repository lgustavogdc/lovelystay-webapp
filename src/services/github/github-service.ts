import { GithubUser } from 'src/models/github'
import { HttpGet } from '../protocols/api'
import { GetGithubUsers } from '../protocols/github'

export class GithubService implements GetGithubUsers {
  constructor(private readonly httpService: HttpGet) {}

  async getUsers(username: string): Promise<GithubUser[]> {
    const queryFilter = `${username} in:login`
    const response = await this.httpService.get<GithubUser[]>({
      url: '/search/users',
      params: { q: queryFilter },
    })

    return response.body
  }
}
