import { Post } from '../Post'
import { Container } from './style'

export const PostList: React.FC = () => {
  const posts = [1, 2, 3, 4, 5]

  return (
    <Container>
      {posts.map(post => {
        return <Post />
      })}
    </Container>
  )
}
