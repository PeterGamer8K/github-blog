import React from 'react'
import { PostList } from '../PostList'
import { SearchInput } from '../SearchInput'

import { Container, Content, Header } from './style'

export const PostsSection: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </Header>
        <SearchInput placeholder="Buscar conteúdo" />
        <PostList />
      </Content>
    </Container>
  )
}
