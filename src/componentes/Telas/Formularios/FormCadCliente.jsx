import { useState } from 'react';
import { Container, Form, Row, Col, Button, FloatingLabel, Spinner } from 'react-bootstrap';

export default function FormCadCliente(props) {
    return (
        <Container className="mt-3">
            <Form >
                <Form.Group controlId="formNomeCliente" className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do cliente" required />
                </Form.Group>

                <Form.Group controlId="formCPFCliente" className="mb-3">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="Digite o CPF do cliente" required />
                </Form.Group>

                <Form.Group controlId="formEnderecoCliente" className="mb-3">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" placeholder="Digite o endereço do cliente" required />
                </Form.Group>

                <Form.Group controlId="formTelefoneCliente" className="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" placeholder="Digite o telefone do cliente" required />
                </Form.Group>

                <Form.Group controlId="formEmailCliente" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Digite o email do cliente" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar Cliente
                </Button>
            </Form>
    </Container >
    );

}