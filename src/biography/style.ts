import styled from "styled-components"
import { pxToRem } from "../styles/Utils"

export const Container = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${pxToRem(40)};
    padding: ${pxToRem(40)} ${pxToRem(20)};
`
export const Container_text = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};
    max-width: ${pxToRem(600)};
    text-align: left;
`
export const Text = styled.h3`
    font-size: ${pxToRem(24)};
    color: ${({ theme }) => theme.colors.tertiary};
`
export const Text_2 = styled.p`
    font-size: ${pxToRem(16)};
    color: ${({ theme }) => theme.colors.tertiary};
`
export const Time = styled.div`
    img {
        width: 100%;
        max-width: ${pxToRem(400)};
        height: auto;
        border-radius: ${pxToRem(10)};
    }
`

export const SmallButton = styled.button`
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
    cursor: pointer;;
    transition: all 0.3s ease;
    text-align: center;

    &:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
    }
`