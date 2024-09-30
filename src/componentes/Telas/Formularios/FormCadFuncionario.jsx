import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadFuncionario(props) {
    const [funcionario, setFuncionario] = useState(props.funcionarioSelecionado);
    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeFuncionarios([...props.listaDeFuncionarios, funcionario]);
                props.setExibirTabela(true);
            } else {
                props.setListaDeFuncionarios(props.listaDeFuncionarios.map((item) => 
                    item.codigo !== funcionario.codigo ? item : funcionario
                ));
                props.setModoEdicao(false);
                props.setFuncionarioSelecionado({
                    codigo: 0,
                    nome: "",
                    cargo: "",
                    salario: 0,
                    dataAdmissao: "",
                    email: ""
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
        const { name, value } = evento.target;
        setFuncionario({ ...funcionario, [name]: value });
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="codigo"
                        value={funcionario.codigo}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Informe o código do funcionário!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="8">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="nome"
                        value={funcionario.nome}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Informe o nome do funcionário!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="6">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="cargo"
                        value={funcionario.cargo}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Informe o cargo!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Salário</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text>R$</InputGroup.Text>
                        <Form.Control
                            required
                            type="text"
                            name="salario"
                            value={funcionario.salario}
                            onChange={manipularMudanca}
                        />
                        <Form.Control.Feedback type="invalid">Informe o salário!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="6">
                    <Form.Label>Data de Admissão</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="dataAdmissao"
                        value={funcionario.dataAdmissao}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Informe a data de admissão!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        name="email"
                        value={funcionario.email}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Informe o email!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button type="submit" variant="primary">{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                </Col>
                <Col md={{ offset: 1 }}>
                    <Button type="button" variant="secondary" onClick={() => {
                        props.setModoEdicao(false);
                        props.setFuncionarioSelecionado({
                            codigo: 0,
                            nome: "",
                            cargo: "",
                            salario: 0,
                            dataAdmissao: "",
                            email: ""
                        });
                        props.setExibirTabela(true);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    );
}
