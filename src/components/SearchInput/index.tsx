import { InputHTMLAttributes } from 'react'
import { Container, Input } from './style'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput: React.FC<SearchInputProps> = ({ ...rest }) => {
  return (
    <Container>
      <Input {...rest} />
    </Container>
  )
}
