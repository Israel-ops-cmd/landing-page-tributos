import { ThemeProvider } from "styled-components"
import { theme } from "./styles/Theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Header } from "./header"
import { Hero } from "./hero"
import { Trust } from "./trust"


function App() {
  return (
   <ThemeProvider theme={theme}>
    <>
    <GlobalStyle />
    <Header />
    <Hero />
    <Trust />
    </>
   </ThemeProvider>
  )
}

export default App
