import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {
  Container,
  Content,
  Footer,
  MainContent,
  PostInfoHeader,
} from './style'

export const PostInfo: React.FC = () => {
  return (
    <Container>
      <Content>
        <PostInfoHeader>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>voltar</span>
          </NavLink>
          <a href="https://github.com/">
            <span>ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostInfoHeader>
        <MainContent>
          <h2>JavaScript data types and data structures</h2>
        </MainContent>
        <Footer></Footer>
      </Content>
    </Container>
  )
}
