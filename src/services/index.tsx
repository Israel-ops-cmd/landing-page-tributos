import React from "react"
import { Container, Title, Cards, Card } from "./style"

export const Services: React.FC = () => {
  return (
    <Container id="services">
      <Title>Nossos Serviços</Title>
      <Cards>
        <Card>
          <h4>📑 Abertura de Empresa</h4>
          <p>Todo o processo burocrático feito por nós</p>
        </Card>
        <Card>
          <h4>📝 Regularização de Empresa</h4>
          <p>Deixe seu CNPJ em dia com a Receita</p>
        </Card>
        <Card>
          <h4>❌ Baixa de Empresa</h4>
          <p>Encerramento de CNPJs de forma segura</p>
        </Card>
        <Card>
          <h4>🧾 Emissão de Notas</h4>
          <p>Facilidade na emissão e controle fiscal</p>
        </Card>
        <Card>
          <h4>🏢 Constituição de LTDA</h4>
          <p>Crie sua empresa com segurança jurídica</p>
        </Card>
        <Card>
          <h4>💰 Declaração de IR</h4>
          <p>Imposto de renda sem complicações</p>
        </Card>
        <Card>
          <h4>🔄 Alteração de Dados</h4>
          <p>Atualização cadastral rápida e confiável</p>
        </Card>
      </Cards>
    </Container>
  )
}
