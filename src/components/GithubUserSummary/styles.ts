import styled from 'styled-components'

export const Wrapper = styled.div.attrs({
  'data-testid': 'GithubUserSummaryWrapper',
})`
  background-color: #21212d;
  border-radius: 8px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: #005efe;
  cursor: pointer;
  width: 700px;
`

export const Title = styled.h1`
  margin: 0;
  margin-left: 10px;
  font-size: 20px;
`
