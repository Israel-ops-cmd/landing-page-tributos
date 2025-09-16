import styled from "styled-components"
import { pxToRem } from "../styles/Utils"

export const PageWrapper = styled.div`
    width: 100%;
    max-width: ${pxToRem(700)};
    margin: 0 auto;
    margin-top: ${pxToRem(30)}
`

export const Container = styled.section`
    width: 100%;

    //background: ${({ theme }) => 
        `linear-gradient(
        to bottom,
        ${theme.colors.primary} 0%
        ${theme.colors.secondary} 100%
        )`
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Logo = styled.div`
    img {
        width: ${pxToRem(250)};
        height: ${pxToRem(125)};
    }
`