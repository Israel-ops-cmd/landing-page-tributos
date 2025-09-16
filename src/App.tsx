import { ThemeProvider } from "styled-components"
import { theme } from "./styles/Theme"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Header } from "./header"
import { Hero } from "./hero"
import { Trust } from "./trust"
import { Biography } from "./biography"


function App() {
  return (
   <ThemeProvider theme={theme}>
    <>
    <GlobalStyle />
    <Header />
    <Hero />
    <Trust />
    <Biography />
    </>
   </ThemeProvider>
  )
}

export default App
