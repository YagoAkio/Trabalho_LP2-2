import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import FormCadFornecedor from "./Formularios/FormCadFornecedor";

export default function TelaCadastroFornecedor(props){
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Fornecedor
                    </h2>
                </Alert>
                <FormCadFornecedor />
            </Pagina>

        </div>
    );
}