import styled from "styled-components"
import { pxToRem } from "../styles/Utils"

export const Container = styled.header`
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${pxToRem(0)} ${pxToRem(40)};
`

export const Logo = styled.div`
    img {
        width: ${pxToRem(50)};
        height: ${pxToRem(50)};
        
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${pxToRem(60)};

    @media (max-width: 1024px) {
        gap: ${pxToRem(30)};
    }
    
    @media (max-width: 768px) {
        display: none; 
    }
`

export const NavLink = styled.a`
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

