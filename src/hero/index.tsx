import React from "react"
import { Container, Logo, PageWrapper } from "./style"
import { StyledH1, StyledH2 } from "../styles/GlobalStyle"
import { pxToRem } from "../styles/Utils"
import mainLogo from '../assets/mainLogo.jpg'
import { Button } from "../styles/GlobalStyle"

export const Hero: React.FC = () => {
    return(
        <PageWrapper id="Home">
            <Container>
                <Logo><img src={mainLogo} alt="" /></Logo>
                <StyledH1>Cresça com segurança.</StyledH1>
                <StyledH1 style={{ marginBottom: pxToRem(20)}}>Expanda com excelência.</StyledH1>
                <StyledH2>Serviços Contábeis com padrão nacional para empresas que precisam de controle absoluto, clareza estratégica e suporte de alto nível para crescer - no Brasil ou no mundo.</StyledH2>
                <Button
                    as="a"
                    href="https://wa.me/558420107912?text=Olá,%20gostaria%20de%20um%20diagnóstico%20estratégico!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Solicitar diagnóstico estratégico
                </Button>
            </Container>
        </PageWrapper>
    )
}
