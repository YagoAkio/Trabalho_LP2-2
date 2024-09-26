import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import FormCadUsuario from "./Formularios/FormCadUsuario";
import { useState } from "react";
import TabelaUsuarios from "./Tabelas/TabelaUsuario";

export default function TelaCadastroUsuario(props){
    const [exibirTabela, setExibirTabela] = useState(false);
    const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        id: 0,
        nome: "",
        email: "",
        telefone: "",
        senha: ""
    })
    const [modoEdicao, setModoEdicao] = useState(false);
    let idUsuario = 0
    if(listaDeUsuarios.length > 0 ){
        idUsuario = listaDeUsuarios[listaDeUsuarios.length-1].id;
    }

    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Usuário
                    </h2>
                </Alert>
                {
                    exibirTabela ?  <TabelaUsuarios
                                        setExibirTabela={setExibirTabela}
                                        listaDeUsuarios = {listaDeUsuarios}
                                        setListaDeUsuarios = {setListaDeUsuarios}
                                        setUsuarioSelecionado = {setUsuarioSelecionado}
                                        setModoEdicao = {setModoEdicao}                                  
                                    /> 
                                    : 
                                    <FormCadUsuario 
                                        setExibirTabela = {setExibirTabela}
                                        listaDeUsuarios = {listaDeUsuarios}
                                        setListaDeUsuarios = {setListaDeUsuarios}
                                        usuarioSelecionado = {usuarioSelecionado}
                                        setUsuarioSelecionado = {setUsuarioSelecionado}
                                        modoEdicao = {modoEdicao}
                                        setModoEdicao = {setModoEdicao}
                                        idUsuario = {idUsuario}    
                                    />
                }
            </Pagina>

        </div>
    );
}