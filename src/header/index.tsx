import React from "react"
import { Container, Nav, NavLink, Logo } from "./styles"
import logo from '../assets/logo.jpg'

export const Header: React.FC = () => {
    return (
        <Container>
            <Logo> <img src={logo} alt="" /></Logo>
            <Nav>
                <NavLink>Home</NavLink>
                <NavLink>Quem somos</NavLink>
                <NavLink>Serviços</NavLink>
                <NavLink>Blog</NavLink>
            </Nav>
        </Container>
    )
}