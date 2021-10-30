import Avatar from '../Avatar'
import GithubUserDescription from '../GithubUserDescription'
import * as S from './styles'

export type GithubUserInfoProps = {
  avatar?: string
  name: string
  username: string
  totalRepositories: number
}

const GithubUserInfo = ({ avatar, name, username, totalRepositories }: GithubUserInfoProps) => (
  <S.Wrapper>
    {avatar && <Avatar image={avatar} alt={`avatar:${username}`} style="large" />}
    <GithubUserDescription name={name} username={username} totalRepositories={totalRepositories} />
  </S.Wrapper>
)

export default GithubUserInfo
