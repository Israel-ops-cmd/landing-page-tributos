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

    @media (max-width: 1024px) {
        max-width: ${pxToRem(600)};
    }

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0 ${pxToRem(16)};
    }
`

export const Logo = styled.div`
    img {
        width: ${pxToRem(300)};
        height: ${pxToRem(125)};
        margin-top: ${pxToRem(20)};
        margin-bottom: ${pxToRem(30)};

        @media (max-width: 1024px) {
            width: 100%;
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    
`