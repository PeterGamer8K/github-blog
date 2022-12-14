import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 54rem) {
    grid-template-columns: 1fr;
  }
`
