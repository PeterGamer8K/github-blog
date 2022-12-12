import styled from 'styled-components'

export const Container = styled.div`
  margin-top: -5.5rem;
  width: 100%;
  padding: 0 1rem;
`
export const Content = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  background-color: ${props => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`
export const PostInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  > a {
    color: ${props => props.theme.blue};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      text-transform: uppercase;
      font-size: 0.75rem;
    }
  }
`

export const MainContent = styled.div`
  margin-top: 1.25rem;

  h1 {
    font-size: 1.5rem;
  }
`

export const Footer = styled.div``
