import React from "react";
import { Container, Title, Input, Form, TextArea, Button } from "./style";

export const Forms: React.FC = () => {
    return (
        <Container>
            <Title>Entre em contato com a gente</Title>
            <Form>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="Email" />
                <TextArea placeholder="Mensagem" />
                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
};
