import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import FormCadUsuario from "./Formularios/FormCadUsuario";

export default function TelaCadastroUsuario(props){
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Usuário
                    </h2>
                </Alert>
                <FormCadUsuario />
            </Pagina>

        </div>
    );
}