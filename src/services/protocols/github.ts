import { GithubUser } from 'src/models/github'
import { Repository } from 'src/models/github/repository'

export interface GetGithubUsers {
  getUsers: (partialUsername: GetGithubUsers.Params) => Promise<GetGithubUsers.Response>
}
export namespace GetGithubUsers {
  export type Params = string
  export type Response = GithubUser[]
}

export interface GetGithubUser {
  getUser: (username: GetGithubUser.Params) => Promise<GetGithubUser.Response>
}

export namespace GetGithubUser {
  export type Params = string
  export type Response = GithubUser
}

export interface GetGithubUserRepositories {
  getGithubUserRepositories: (url: GetGithubUserRepositories.Params) => Promise<GetGithubUserRepositories.Response>
}

export namespace GetGithubUserRepositories {
  export type Params = string
  export type Response = Repository[]
}
