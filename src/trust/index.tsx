import React from "react"
import { Cards, Card, Container, Text } from "./style"


export const Trust: React.FC = () => {
    return(
        <Container>
            <Text>💼 Soluções que simplificam sua vida financeira</Text>
            <Cards>
                <Card>
                    <h4>🛡 Conformidade Garantida</h4>
                    <p>Todas as obrigações fiscais em dia</p>
                </Card>
                <Card>
                    <h4>⚡ Agilidade e Segurança</h4>
                    <p>Processos digitais que economizam tempo</p>
                </Card>
                <Card>
                    <h4>🤝 Atendimento Personalizado</h4>
                    <p>Suporte próximo e humanizado</p>
                </Card>
                <Card>
                    <h4>💡 Planejamento Tributário</h4>
                    <p>Redução de custos com soluções legais</p>
                </Card>
            </Cards>
        </Container>
    )
}