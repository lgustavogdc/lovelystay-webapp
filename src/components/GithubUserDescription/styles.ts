import styled from 'styled-components'

export const Wrapper = styled.div.attrs({
  'data-testid': 'GithubUserDescriptionWrapper',
})`
  border-bottom: 2px solid #30363d;
  color: #8b949e;
  font-weight: 300;
  line-height: 20px;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

export const Username = styled.h2`
  font-size: 20px;
`

export const Name = styled.p`
  font-size: 18px;
`

export const TotalRepositories = styled.p``
