import React, { useState } from "react"
import { Container, Title, Input, Form, TextArea, Button } from "./style"

export const Forms: React.FC = () => {
    const [status, setStatus] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget;
        const formData = new FormData(form)

        try {
            await fetch("https://api.sheetmonkey.io/form/bQo2mMUPZiZobGbkc24Qno", {
                method: "POST",
                body: formData,
            });

            setStatus("✅ Dados enviados com sucesso!")
            form.reset()
        } catch (error) {
            setStatus("❌ Erro ao enviar, tente novamente.")
        }
    };

    return (
        <Container>
            <Title>Entre em contato com a gente</Title>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="Nome" placeholder="Nome" required />
                <Input type="email" name="Email" placeholder="Email" required />
                <TextArea name="Mensagem" placeholder="Mensagem" />
                <Input
                    type="hidden"
                    name="Created"
                    value="x-sheetmonkey-current-date-time"
                />
                <Button type="submit">Enviar</Button>
            </Form>

            {/* Feedback estilizado */}
            {status && (
                <p
                    style={{
                        marginTop: "1rem",
                        fontWeight: "bold",
                        color: status.includes("✅") ? "green" : "red"
                    }}
                >
                    {status}
                </p>
            )}
        </Container>
    )
}
