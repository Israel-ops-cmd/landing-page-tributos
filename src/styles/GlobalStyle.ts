import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { pxToRem } from "./Utils"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html, body {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.tertiary};
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
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`

export const StyledH2 = styled.h2`
    font-size: ${pxToRem(20)};
    font-weight: 400;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`
export const Button = styled.button`
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.secondary} 0%,
        ${({ theme }) => theme.colors.tertiary} 100%
    );

    color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: ${pxToRem(8)};
    padding: ${pxToRem(12)} ${pxToRem(24)};
    font-size: ${pxToRem(16)};
    font-weight: 600;
    cursor: pointer;
    margin-top: ${pxToRem(60)};
    margin-bottom: ${pxToRem(80)};
    transition: all 0.3s ease;

    &:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
    }
`
