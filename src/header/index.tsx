import React from "react"
import { Container, Nav, NavLink, Logo } from "./styles"
import blackLogo from '../assets/blackLogo.webp'

export const Header: React.FC = () => {
    return (
        <Container>
            <Logo> <img src={blackLogo} alt="" /></Logo>
            <Nav>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#quem-somos">Quem somos</NavLink>
                <NavLink href="#services">Serviços</NavLink>
                <NavLink href="#solutions">Soluções</NavLink>
            </Nav>
        </Container>
    )
}