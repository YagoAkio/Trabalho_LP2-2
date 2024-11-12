import { Alert } from "react-bootstrap";
import FormCadFornecedor from "./Formularios/FormCadFornecedor";
import Pagina from "../layouts/Pagina";
import { useEffect, useState } from "react";
import TabelaFornecedores from "./Tabelas/TabelaFornecedor";
import { consultarFornecedor } from "../../services/servicoFornecedor";

export default function TelaCadastroFornecedor(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeFornecedores, setListaDeFornecedores] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
        codigo: 0,
        nome: "",
        cnpj: "",
        telefone: "",
        email: "",
        endereco: ""
    });

    useEffect(()=>{
        consultarFornecedor().then((lista)=>{
            setListaDeFornecedores(lista||[]);
        })
    });

    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>Cadastro de Fornecedor</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaFornecedores
                            listaDeFornecedores={listaDeFornecedores}
                            setListaDeFornecedores={setListaDeFornecedores}
                            setExibirTabela={setExibirTabela}
                            setModoEdicao={setModoEdicao}
                            setFornecedorSelecionado={setFornecedorSelecionado}
                        /> :
                        <FormCadFornecedor
                            listaDeFornecedores={listaDeFornecedores}
                            setListaDeFornecedores={setListaDeFornecedores}
                            setExibirTabela={setExibirTabela}
                            fornecedorSelecionado={fornecedorSelecionado}
                            setFornecedorSelecionado={setFornecedorSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                        />
                }
            </Pagina>
        </div>
    );
}
