import styled from "styled-components"
import { pxToRem } from "../styles/Utils"

export const PageWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
`

export const Container = styled.section`
    background-color: ${({ theme }) => theme.colors.primary}
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
        margin-top: ${pxToRem(20)};
        margin-bottom: ${pxToRem(30)};
    }
`