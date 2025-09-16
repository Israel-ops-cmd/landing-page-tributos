import React from "react"
import { Container, Logo, PageWrapper } from "./style"
import { StyledH1, StyledH2 } from "../styles/GlobalStyle"
import { pxToRem } from "../styles/Utils"
import mainLogo from '../assets/mainLogo.jpg'

export const Hero: React.FC = () => {
    return(
        <PageWrapper>
            <Container>
                <Logo><img src={mainLogo} alt="" /></Logo>
                <StyledH1>Cresça com segurança.</StyledH1>
                <StyledH1 style={{ marginBottom: pxToRem(10)}}>Expanda com excelência.</StyledH1>
                <StyledH2>Serviços Contábeis com padrão nacional para empresas que precisam de controle absoluto, clareza estratégica e suporte de alto nível para crescer - no Brasil ou no mundo.</StyledH2>
            </Container>
        </PageWrapper>
    )
}
