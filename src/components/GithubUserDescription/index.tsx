import * as S from './styles'

export type GithubUserDescriptionProps = {
  name: string
  username: string
  totalRepositories: number | null
}

const GithubUserDescription = ({ name, username, totalRepositories }: GithubUserDescriptionProps) => (
  <S.Wrapper>
    <S.Username>{username}</S.Username>
    <S.Name>{name}</S.Name>
    <S.TotalRepositories>Number of repositories: {totalRepositories}</S.TotalRepositories>
  </S.Wrapper>
)

export default GithubUserDescription
