import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  margin-top: 4.5rem;
  padding: 0 1rem;
`

export const Content = styled.form`
  max-width: 54rem;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    color: ${props => props.theme['base-span']};
    font-weight: 400;
  }
`
