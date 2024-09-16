import { useState } from 'react';
import { Container, Form, Row, Col, Button, FloatingLabel, Spinner } from 'react-bootstrap';

export default function FormCadUsuario(props) {
    return (
        <Container className="mt-3">
            <Form>
                <Form.Group controlId="formNomeUsuario" className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do usuário" required />
                </Form.Group>

                <Form.Group controlId="formEmailUsuario" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Digite o email do usuário" required />
                </Form.Group>

                <Form.Group controlId="formTelefoneUsuario" className="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" placeholder="Digite o telefone do usuário" required />
                </Form.Group>

                <Form.Group controlId="formSenhaUsuario" className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite a senha do usuário" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar Usuário
                </Button>
            </Form>
        </Container>
    );

}