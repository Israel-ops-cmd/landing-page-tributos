import React from "react"
import { Container, Nav, NavLink, Logo } from "./styles"
import blackLogo from '../assets/blackLogo.png'

export const Header: React.FC = () => {
    return (
        <Container>
            <Logo> <img src={blackLogo} alt="" /></Logo>
            <Nav>
                <NavLink>Home</NavLink>
                <NavLink>Quem somos</NavLink>
                <NavLink>Serviços</NavLink>
                <NavLink>Blog</NavLink>
            </Nav>
        </Container>
    )
}