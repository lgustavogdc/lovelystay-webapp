import { GithubUser } from 'src/models/github'
import GithubUserSummary from '../GithubUserSummary'
import List from '../List'

export type GithubUserListProps = {
  users: Array<Pick<GithubUser, 'id' | 'login' | 'name' | 'avatar_url'>>
  onSelectUser: (route: string) => void
}

const GithubUserList = ({ users, onSelectUser }: GithubUserListProps) => (
  <List
    nodes={users.map((user) => (
      <GithubUserSummary
        key={user.id}
        username={user.login}
        name={user.name}
        avatar={user.avatar_url}
        onClick={() => onSelectUser(`user/${user.login}`)}
      />
    ))}
  />
)

export default GithubUserList
