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

    @media (max-width: 1024px) {
        gap: ${pxToRem(30)};
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: ${pxToRem(20)};
        text-align: center;
    }
`
export const Container_text = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(20)};
    max-width: ${pxToRem(600)};
    text-align: left;

    @media (max-width: 768px) {
        text-align: center;
        align-items: center;
        order: 1;
    }
`
export const Text = styled.h3`
    font-size: ${pxToRem(24)};
    color: ${({ theme }) => theme.colors.tertiary};

    @media (max-width: 1024px) {
        font-size: ${pxToRem(22)};
    }

  @media (max-width: 768px) {
    font-size: ${pxToRem(20)};
  }
`
export const Text_2 = styled.p`
    font-size: ${pxToRem(16)};
    color: ${({ theme }) => theme.colors.tertiary};

    
`
export const Time = styled.div`
    width: 100%;
    max-width: ${pxToRem(400)};

    img {
        width: 100%;
        height: auto;
        border-radius: ${pxToRem(10)};
    }
    
    @media (max-width: 1024px) {
        max-width: ${pxToRem(350)};
    }

    @media (max-width: 768px) {
        max-width: ${pxToRem(300)};
        order: 2;
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