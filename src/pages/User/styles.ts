import styled from 'styled-components'

export const Wrapper = styled.main``

export const InfoWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;

 @media (max-width: 767px) {
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  }
}
`
export const LoadingWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`
