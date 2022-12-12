import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { PostList } from '../PostList'
import { SearchInput } from '../SearchInput'
import { Container, Content, Header } from './style'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export const PostsSection: React.FC = () => {
  const { control, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  const handleSearchPosts = (data: SearchFormInputs) => {
    console.log(data)
  }

  return (
    <Container>
      <Content onSubmit={handleSubmit(handleSearchPosts)}>
        <Header>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </Header>
        <Controller
          control={control}
          name="query"
          render={({ field, fieldState }) => {
            return (
              <>
                <SearchInput
                  placeholder="Buscar conteúdo"
                  value={field.value}
                  onChange={event => {
                    const inputValue = event.target.value
                    field.onChange(inputValue)
                  }}
                />
                {fieldState.error && <span>{fieldState.error.message}</span>}
              </>
            )
          }}
        />

        <PostList />
      </Content>
    </Container>
  )
}
