import Avatar from '../Avatar'
import * as S from './styles'

export type GithubUserSummaryProps = {
  username: string
  name: string
  email: string
  avatar?: string
  onClick?: () => void
}

const GithubUserSummary = ({ username, name, email, onClick, avatar }: GithubUserSummaryProps) => (
  <S.Wrapper onClick={() => onClick && onClick()}>
    {avatar && <Avatar image={avatar} alt={`avatar:${username}`} />}
    <S.Title>{name}</S.Title>
    <S.SubtitleWrapper>
      <S.Subtitle>{username}</S.Subtitle>
      <S.Subtitle>{email}</S.Subtitle>
    </S.SubtitleWrapper>
  </S.Wrapper>
)

export default GithubUserSummary
