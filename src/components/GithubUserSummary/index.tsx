import Avatar from '../Avatar'
import * as S from './styles'

export type GithubUserSummaryProps = {
  username: string
  avatar?: string
  onClick?: () => void
}

const GithubUserSummary = ({ username, onClick, avatar }: GithubUserSummaryProps) => (
  <S.Wrapper onClick={() => onClick && onClick()}>
    {avatar && <Avatar image={avatar} alt={`avatar:${username}`} />}
    <S.Title>{username}</S.Title>
  </S.Wrapper>
)

export default GithubUserSummary
