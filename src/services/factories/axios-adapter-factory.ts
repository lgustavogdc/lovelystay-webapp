import { AxiosAdapterGet } from '../api/axios-adapter'
import { HttpGet } from '../protocols/api'

export const axiosAdapterGetFactory = (): HttpGet => {
  return new AxiosAdapterGet('https://api.github.com')
}
