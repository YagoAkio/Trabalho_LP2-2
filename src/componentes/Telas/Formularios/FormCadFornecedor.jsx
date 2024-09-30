import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadFornecedor(props) {
    const [fornecedor, setFornecedor] = useState(props.fornecedorSelecionado);
    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeFornecedores([...props.listaDeFornecedores, fornecedor]);
                props.setExibirTabela(true);
            } else {
                props.setListaDeFornecedores(props.listaDeFornecedores.map((item) => {
                    if (item.codigo !== fornecedor.codigo) return item;
                    else return fornecedor;
                }));
                props.setModoEdicao(false);
                props.setFornecedorSelecionado({
                    codigo: 0,
                    nome: "",
                    cnpj: "",
                    telefone: "",
                    email: "",
                    endereco: ""
                });
                props.setExibirTabela(true);
            }
        } else {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setFornecedor({ ...fornecedor, [elemento]: valor });
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="codigo"
                        name="codigo"
                        value={fornecedor.codigo}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o código do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="nome"
                        name="nome"
                        value={fornecedor.nome}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o nome do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="6">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="cnpj"
                        name="cnpj"
                        value={fornecedor.cnpj}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o CNPJ do fornecedor!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={fornecedor.telefone}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o telefone do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={fornecedor.email}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o email do fornecedor!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="endereco"
                        name="endereco"
                        value={fornecedor.endereco}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o endereço do fornecedor!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mt-2 mb-2">
                <Col md={1}>
                    <Button type="submit" variant="primary">
                        {props.modoEdicao ? "Alterar" : "Cadastrar"}
                    </Button>
                </Col>
                <Col md={{ offset: 1 }}>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => {
                            props.setModoEdicao(false);
                            props.setFornecedorSelecionado({
                                codigo: 0,
                                nome: "",
                                cnpj: "",
                                telefone: "",
                                email: "",
                                endereco: ""
                            });
                            props.setExibirTabela(true);
                        }}
                    >
                        Voltar
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
