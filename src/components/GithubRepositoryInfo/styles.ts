import styled from 'styled-components'

export const Wrapper = styled.div.attrs({
  'data-testid': 'GithubRepositoryInfoWrapper',
})`
  border: 2px solid #30363d;
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  background-color: #21212d;
`

export const RepositoryName = styled.h1`
  color: #58a6ff;
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
`

export const RepositoryDescription = styled.p.attrs({
  'data-testid': 'GithubRepositoryDescription',
})`
  margin-top: 8px;
  margin-bottom: 16px;
  font-size: 12px;
  color: #8b949e;
  padding: 5px;
`
