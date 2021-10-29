import { GithubService } from '../github/github-service'
import { axiosAdapterGetFactory } from './axios-adapter-factory'

export const githubServiceFactory = (): GithubService => {
  return new GithubService(axiosAdapterGetFactory())
}
