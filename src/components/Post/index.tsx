import { Container, DescriptionContainer, TitleContainer } from './style'

export const Post: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h3>JavaScript data types and data structures</h3>
        <span>Há 1 dia</span>
      </TitleContainer>

      <DescriptionContainer>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in
        </p>
      </DescriptionContainer>
    </Container>
  )
}
