import styled from 'styled-components'

export const Wrapper = styled.div.attrs({
  'data-testid': 'GithubUserSummaryWrapper',
})`
  background-color: #21212d;
  border-radius: 8px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: #005efe;
  cursor: pointer;
`

export const Title = styled.h1`
  margin: 0;
  margin-left: 10px;
  font-size: 20px;
`

export const Subtitle = styled.h2.attrs({
  'data-testid': 'GithubUserSummarySubtitle',
})`
  margin: 0;
  margin-left: 10px;
  font-size: 18px;
`
