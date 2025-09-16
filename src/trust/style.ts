import styled from "styled-components"
import { pxToRem } from "../styles/Utils"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: ${pxToRem(1200)};
    margin: 0 auto;
   
`

export const Text = styled.h3`
    font-size: ${pxToRem(24)};
    color: ${({ theme }) => theme.colors.tertiary};
`