import { ThemeProvider } from "styled-components"
import { Header } from "./header"
import { Hero } from "./hero"
import { Trust } from "./trust"
import { Biography } from "./biography"
import { Services } from "./services"
import { Forms } from "./forms"
import { Footer } from "./footer"
import { GlobalStyle } from "./styles/GlobalStyle"
import { theme } from "./styles/Theme"

function App() {
    return(
        <ThemeProvider theme = {theme}>
            <GlobalStyle />
            <Header />
            <Hero />
            <Trust />
            <Biography />
            <Services />
            <Forms />
            <Footer />
        </ThemeProvider>
    )
}

export default App

