import styled from 'styled-components'

export const GithubButtonContainer = styled.a`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  span {
    color: ${props => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0;
  }

  svg {
    line-height: 0;
    color: ${props => props.theme.blue};
  }
`
