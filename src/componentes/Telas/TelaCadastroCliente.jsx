import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import FormCadCliente from "./Formularios/FormCadCliente";
export default function TelaCadastroCliente(props) {
    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Cliente
                    </h2>
                </Alert>
                <FormCadCliente />
            </Pagina>
        </div>
    );
}