import { Header } from '../../components/Header'
import { PostsSection } from '../../components/PostsSection'
import { Profile } from '../../components/Profile'

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Profile />
      <PostsSection />
    </>
  )
}
