import { Alert } from "react-bootstrap";
import FormCadFuncionario from "./Formularios/FormCadFuncionario";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaFuncionarios from "./Tabelas/TabelaFuncionarios";

export default function TelaCadastroFuncionario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeFuncionarios, setListaDeFuncionarios] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [funcionarioSelecionado, setFuncionarioSelecionado] = useState({
        codigo: 0,
        nome: "",
        cargo: "",
        salario: 0,
        dataAdmissao: "",
        email: ""
    });

    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Funcionário
                    </h2>
                </Alert>
                {
                    exibirTabela ? 
                        <TabelaFuncionarios listaDeFuncionarios={listaDeFuncionarios}
                                            setListaDeFuncionarios={setListaDeFuncionarios}
                                            setExibirTabela={setExibirTabela}
                                            setModoEdicao={setModoEdicao}
                                            setFuncionarioSelecionado={setFuncionarioSelecionado} /> :
                        <FormCadFuncionario listaDeFuncionarios={listaDeFuncionarios}
                                            setListaDeFuncionarios={setListaDeFuncionarios}
                                            setExibirTabela={setExibirTabela}
                                            funcionarioSelecionado={funcionarioSelecionado}
                                            setFuncionarioSelecionado={setFuncionarioSelecionado}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao} />
                }
            </Pagina>
        </div>
    );
}
