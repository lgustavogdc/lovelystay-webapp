import { Repository } from 'src/models/github/repository'
import GithubRepositoryInfo from '../GithubRepositoryInfo'
import List from '../List'

export type GithubRepositoryListProps = {
  repositories: Repository[]
}

const RepositoryList = ({ repositories }: GithubRepositoryListProps) => (
  <List
    nodes={repositories.map(({ id, name, description }) => (
      <GithubRepositoryInfo key={id} name={name} description={description} />
    ))}
  />
)

export default RepositoryList
