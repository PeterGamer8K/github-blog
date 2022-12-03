import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
`

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 1.25rem;

  > h3 {
    font-size: 1.25rem;
  }

  > span {
    color: ${props => props.theme['base-span']};
    font-size: 14px;
    text-align: end;
  }
`

export const DescriptionContainer = styled.div`
  > p {
  }
`
