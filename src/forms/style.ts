import styled from "styled-components"
import { pxToRem } from "../styles/Utils"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${pxToRem(40)};
    background-color: #f4f4f4;
`;

export const Title = styled.h2`
    margin-bottom: ${pxToRem(20)};
    color: #333;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: ${pxToRem(300)};
    gap: ${pxToRem(12)};
`;

export const Input = styled.input`
    padding: ${pxToRem(10)};
    border: ${pxToRem(1)} solid #ccc;
    border-radius: ${pxToRem(4)};
`;

export const TextArea = styled.textarea`
    padding: ${pxToRem(10)};
    border: ${pxToRem(1)} solid #ccc;
    border-radius: ${pxToRem(4)};
    height: ${pxToRem(100)};
`;

export const Button = styled.button`
    padding: ${pxToRem(10)};
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: ${pxToRem(4)};
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
