import styled from "styled-components"
import { pxToRem } from "../styles/Utils"

export const PageWrapper = styled.div`
    background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.colors.primary} 0%,
        ${({ theme }) => theme.colors.primary} 35%,
        rgba(32, 33, 35, 0.8) 60%,
        ${({ theme }) => theme.colors.secondary} 100%
    );
    width: 100%;
`

export const Container = styled.section`
    width: 100%;
    max-width: ${pxToRem(700)};
    margin: 0 auto;
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
        margin-top: ${pxToRem(40)}
    }
`