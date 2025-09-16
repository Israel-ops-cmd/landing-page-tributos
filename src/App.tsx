import { ThemeProvider } from "styled-components"
import { theme } from "./styles/Theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Header } from "./header"
import { Hero } from "./hero"


function App() {
  return (
   <ThemeProvider theme={theme}>
    <>
    <GlobalStyle />
    <Header />
    <Hero />
    </>
   </ThemeProvider>
  )
}

export default App
