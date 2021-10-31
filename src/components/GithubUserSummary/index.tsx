import Avatar from '../Avatar'
import * as S from './styles'

export type GithubUserSummaryProps = {
  username: string
  name?: string
  avatar?: string
  onClick?: () => void
}

const GithubUserSummary = ({ username, name, onClick, avatar }: GithubUserSummaryProps) => (
  <S.Wrapper onClick={() => onClick && onClick()}>
    {avatar && <Avatar image={avatar} alt={`avatar:${username}`} />}
    <S.Title>{username}</S.Title>
    {name && <S.Subtitle>{name}</S.Subtitle>}
  </S.Wrapper>
)

export default GithubUserSummary
