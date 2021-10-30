import * as S from './styles'

export type GithubRepositoryInfoProps = {
  name: string
  description?: string
}

const GithubRepositoryInfo = ({ name, description }: GithubRepositoryInfoProps) => (
  <S.Wrapper>
    <S.RepositoryName>{name}</S.RepositoryName>
    {description && <S.RepositoryDescription>{description}</S.RepositoryDescription>}
  </S.Wrapper>
)

export default GithubRepositoryInfo
