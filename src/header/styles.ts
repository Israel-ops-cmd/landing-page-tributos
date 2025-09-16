import styled from "styled-components"
import { pxToRem } from "../styles/Utils"

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.div`
    img {
        width: ${pxToRem(50)};
        height: ${pxToRem(50)};
        margin-right: ${pxToRem(900)};
        margin-top: ${pxToRem(20)}
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${pxToRem(60)};
    position: absolute;
`

export const NavLink = styled.a`
    font-weight: 500;
`

