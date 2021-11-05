import styled from 'styled-components'

export const Wrapper = styled.div.attrs({
  'data-testid': 'GithubUserSummaryWrapper',
})`
  background-color: #21212d;
  border-radius: 8px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: #005efe;
  cursor: pointer;
  width: 100%;
  max-width: 700px;

  &:hover {
    background-color: #4a4a59;
    transition: 0.5s background-color;
  }
`

export const Title = styled.h1`
  margin: 0;
  margin-left: 10px;
  font-size: 20px;

  @media (max-width: 375px) {
    font-size: 18px;
  }
`
