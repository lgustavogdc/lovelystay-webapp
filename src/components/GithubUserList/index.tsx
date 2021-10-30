import { GithubUser } from 'src/models/github'
import GithubUserSummary from '../GithubUserSummary'
import List from '../List'

export type GithubUserListProps = {
  users: Array<Pick<GithubUser, 'id' | 'login' | 'name' | 'email' | 'avatar_url'>>
  onSelectUser: (id: number) => void
}

const GithubUserList = ({ users, onSelectUser }: GithubUserListProps) => (
  <List
    nodes={users.map(({ login, name, email, avatar_url, id }) => (
      <GithubUserSummary
        key={id}
        username={login}
        name={name}
        email={email}
        avatar={avatar_url}
        onClick={() => onSelectUser(id)}
      />
    ))}
  />
)

export default GithubUserList