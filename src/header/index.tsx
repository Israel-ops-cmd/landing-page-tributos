import React from "react"
import { Container, Nav, NavLink } from "./styles"

export const Header: React.FC = () => {
    return (
        <Container>
            <Nav>
                <NavLink>Home</NavLink>
                <NavLink>Quem somos</NavLink>
                <NavLink>Serviços</NavLink>
                <NavLink>Blog</NavLink>
            </Nav>
        </Container>
    )
}