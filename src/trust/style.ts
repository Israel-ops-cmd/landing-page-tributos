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
export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: ${pxToRem(40)};
    margin-bottom: ${pxToRem(40)};
    gap: ${pxToRem(20)};
`
export const Card = styled.div`
    background-color: black;
    border-radius: ${pxToRem(12)};
    padding: ${pxToRem(20)};
    width: ${pxToRem(300)};
    height: ${pxToRem(150)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4 {
        font-size: ${pxToRem(16)};
        margin-botton: ${pxToRem(12)};
    }
`