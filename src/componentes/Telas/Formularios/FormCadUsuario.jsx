import { useState } from 'react';
import { Container, Form, Row, Col, Button, FloatingLabel, Spinner } from 'react-bootstrap';

export default function FormCadUsuario(props) {
    const usuarioVazio = {
        id: 0,
        nome: "",
        email: "",
        telefone: "",
        senha: ""
    }
    const estadoInicialUsuario = props.usuarioParaEdicao;
    const [usuario, setUsuario] = useState(estadoInicialUsuario);
    const [formValidado, setFormValidado] = useState(false);
    
    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if(form.checkValidity()){
            if(!props.modoEdicao){
                usuario.id = props.idUsuario + 1;
                props.setListaDeUsuarios([...props.listaDeUsuarios,usuario])
                
            }else{
                props.setListaDeUsuarios([...props.listaDeUsuarios.filter((itemUsuario)=>itemUsuario.id !== usuario.id),usuario]);
                props.setModoEdicao(false);
                props.setUsuarioParaEdicao(usuarioVazio); 
            }
            props.exibirTabela(true);
            setUsuario(usuarioVazio);
            setFormValidado(false);
        }else{
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento){
        const componente = evento.currentTarget;
        console.log(componente.value);
        setUsuario({...usuario, [componente.name]: componente.value})
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Digite o nome do usuário"
                        id="nome"
                        name="nome"
                        value={usuario.nome}
                        onChange={manipularMudanca} 
                        required
                    />
                    <Form.Control.Feedback type='invalid'>
                        Por favor, informe o nome do usuario!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite o email do usuário"
                        value={usuario.email}
                        onChange={manipularMudanca}
                        required 
                    />
                    <Form.Control.Feedback type='invalid'>
                        Por favor, informe o email do usuario!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control 
                        type="text"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite o telefone do usuário"
                        value={usuario.telefone}
                        onChange={manipularMudanca}
                        required 
                    />
                    <Form.Control.Feedback type='invalid'>
                        Por favor, informe o telefone do usuario!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control 
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite a senha do usuário" 
                        required 
                        value={usuario.senha}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>
                        Por favor, informe a senha do usuario!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button type="submit"  variant={"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                </Col>
                <Col md={{ offset: 1 }}>
                    <Button type="button" variant={"secondary"} onClick={() => {
                        setUsuario(usuarioVazio);
                        props.exibirTabela(true);
                        props.setModoEdicao(false);
                        props.setUsuarioParaEdicao(usuarioVazio);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    );

}