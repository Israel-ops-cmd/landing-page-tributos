import styled from "styled-components"
import { pxToRem } from "../styles/Utils"

export const Container = styled.section`
    background-color: black;
    padding: ${pxToRem(60)} ${pxToRem(20)};
`
export const Title = styled.h3`
    font-size: ${pxToRem(28)};
    color: ${({ theme }) => theme.colors.tertiary};
    margin-bottom: ${pxToRem(40)};
    text-align: center;
`
export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${pxToRem(20)};
`
export const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.tertiary};
    border-radius: ${pxToRem(12)};
    padding: ${pxToRem(20)};
    width: ${pxToRem(300)};
    min-height: ${pxToRem(150)};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(${pxToRem(-5)});
        box-shadow: ${pxToRem(0)} ${pxToRem(4)} ${pxToRem(12)} rgba(0,0,0,0.15);
    }

    h4 {
    font-size: ${pxToRem(18)};
    margin-bottom: ${pxToRem(10)};
    color: ${({ theme }) => theme.colors.tertiary};
  }

  p {
    font-size: ${pxToRem(14)};
    color: ${({ theme }) => theme.colors.tertiary};
  }
`