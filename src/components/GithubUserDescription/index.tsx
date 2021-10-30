import * as S from './styles'

export type GithubUserDescriptionProps = {
  name: string
  username: string
  totalRepositories: number
}

const GithubUserDescription = ({ name, username, totalRepositories }: GithubUserDescriptionProps) => (
  <S.Wrapper>
    <S.Username>{username}</S.Username>
    <S.Name>{name}</S.Name>
    <S.TotalRepositories>{totalRepositories}</S.TotalRepositories>
  </S.Wrapper>
)

export default GithubUserDescription
