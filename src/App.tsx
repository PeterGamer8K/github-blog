import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { darkTheme } from './styles/themes/dark'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <h1>hello world</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}
