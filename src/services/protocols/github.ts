import { GithubUser } from 'src/models/github'

export interface GetGithubUsers {
  getUsers: (partialUsername: GetGithubUsers.Params) => Promise<GetGithubUsers.Response>
}

export namespace GetGithubUsers {
  export type Params = string
  export type Response = GithubUser[]
}
