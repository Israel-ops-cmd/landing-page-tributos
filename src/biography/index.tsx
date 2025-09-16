import React from "react"
import { Container, Time, Container_text, Text, Text_2, SmallButton } from "./style"
import time from '../assets/time.jpg'


export const Biography: React.FC = () => {
    return(
        <Container>
            <Time><img src={time} alt="" /></Time>
            <Container_text>
                <Text>Quem Somos</Text>
                <Text_2>Somos uma contabilidade especializada em ajudar empreendedores a manterem suas obrigações fiscais em dia, com praticidade e transparência. Nossa missão é simplificar sua vida financeira para que você foque no que realmente importa: o crescimento do seu negócio.</Text_2>
                <SmallButton>Consultar CNPJ</SmallButton>
            </Container_text>
        </Container>
    )
}