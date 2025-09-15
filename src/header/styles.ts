import styled from "styled-components"
import { pxToRem } from "../styles/Utils"

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin-top: ${pxToRem(20)};
    gap: ${pxToRem(60)};
`

export const NavLink = styled.a`
    font-weight: 500;
`

