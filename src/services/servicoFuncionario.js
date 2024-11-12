const urlBase = 'https://backend-trab-lp-2.vercel.app/funcionarios';

export async function gravarFuncionario(funcionario){
    const resposta = await fetch(urlBase,{
        'method':"POST",
        'headers': { 
            'Content-Type':"application/json"
        },
        'body': JSON.stringify(funcionario)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function alterarFuncionario(funcionario){
    const resposta = await fetch(urlBase + "/" + funcionario.codigo,{
        'method':"PUT",
        'headers': { 
            'Content-Type':"application/json"
        },
        'body': JSON.stringify(funcionario)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function excluirFuncionario(funcionario){
    const resposta = await fetch(urlBase + "/" + funcionario.codigo,{
        'method':"DELETE",
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function consultarCategoria() {
    const resposta = await fetch(urlBase,{
        'method':"GET"
    });
    const resultado = await resposta.json();
    return resultado;
}