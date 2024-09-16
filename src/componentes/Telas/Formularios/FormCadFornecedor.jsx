import { useState } from 'react';
import { Container, Form, Row, Col, Button, FloatingLabel, Spinner } from 'react-bootstrap';

export default function FormCadFornecedor(props) {
    return (
        <Container className="mt-3">
            <Form>
                <Form.Group controlId="formNomeEmpresa" className="mb-3">
                    <Form.Label>Nome da Empresa</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome da empresa" required />
                </Form.Group>

                <Form.Group controlId="formCNPJ" className="mb-3">
                    <Form.Label>CNPJ ou CPF</Form.Label>
                    <Form.Control type="text" placeholder="Digite o CNPJ ou CPF" required />
                </Form.Group>

                <Form.Group controlId="formEndereco" className="mb-3">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" placeholder="Digite o endereço" required />
                </Form.Group>

                <Form.Group controlId="formTelefone" className="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" placeholder="Digite o telefone" required />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Digite o email" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar Fornecedor
                </Button>
            </Form>

        </Container>
    );

}