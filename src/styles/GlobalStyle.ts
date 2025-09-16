import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { pxToRem } from "./Utils"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        color: ${({ theme }) => theme.colors.tertiary};
        background-color: ${({ theme }) => theme.colors.primary};
        height: 100%;
        font-family: 'Poppins', sans-serif;
    }

   a {
    text-decoration: none;
    color: inherit;
   }
`
    

export const StyledH1 = styled.h1`
    font-size: ${pxToRem(32)};
    font-weight: 500;
`

export const StyledH2 = styled.h2`
    font-size: ${pxToRem(20)};
    font-weight: 400;
`
