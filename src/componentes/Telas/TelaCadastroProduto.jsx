import { Alert } from "react-bootstrap";
import FormCadProdutos from "./Formularios/FormCadProduto";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { produtos } from "../../dados/mockProdutos";

export default function TelaCadastroProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(false);
    const [listaDeProdutos, setListaDeProdutos] = useState([]);
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({
        codigo: 0,
        descricao: "",
        precoCusto: 0,
        precoVenda: 0,
        qtdEstoque: 0,
        urlImagem: "",
        dataValidade: ""
    });
    const [modoEdicao, setModoEdicao] = useState(false);

    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Produto
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaProdutos exibirTabela = {setExibirTabela}
                                        listaDeProdutos={listaDeProdutos}
                                        setlistaDeProdutos={setListaDeProdutos}
                                        produtoParaEdicao={produtoParaEdicao}
                                        setProdutoParaEdicao={setProdutoParaEdicao}
                                        modoEdicao={modoEdicao}
                                        setModoEdicao={setModoEdicao} /> :
                        
                        <FormCadProdutos    exibirTabela = {setExibirTabela}
                                            listaDeProdutos={listaDeProdutos} 
                                            setlistaDeProdutos={setListaDeProdutos}
                                            produtoParaEdicao={produtoParaEdicao}
                                            setProdutoParaEdicao={setProdutoParaEdicao}
                                            modoEdicao={modoEdicao}
                                            setModoEdicao={setModoEdicao}
                                            />
                }
            </Pagina>
        </div>
    );

}