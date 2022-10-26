import { ThemeProvider } from 'styled-components'
import { Router } from './routes/Router'
import { GlobalStyles } from './styles/global'
import { darkTheme } from './styles/themes/dark'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  )
}
