import React from 'react';

const JsxExamples = () => {
    const userName = 'JsxExamples'
    const user = {
        firstName: 'Jose',
        lastName: 'Malcher Jr',
    }

    function getGreeting(name) {
        return `Sistema Exemplo ${name}`;
    }


    const userIsLoggedIn = true;
    const userRoler = "admin";

    const usuarios = [
        { id: 1, nome: "João" },
        { id: 2, nome: "Maria" },
        { id: 3, nome: "Pedro" },
        { id: 4, nome: "Ana" },
        { id: 5, nome: "Carlos" }
    ];

    return (
        <div>
            <p>O nome de Exemplo {userName}</p>
            <p>O nome do usuário é {user.firstName} {user.lastName}</p>
            <p>{2 + 2}</p>
            <hr/>
            <p>Nome exemplo por funcion: {getGreeting(userName)}</p>

            {/* Diferenças do HTML */}
            <div className="ajustes-css">CSS no JSX</div>

            <button onClick={() => alert("TESTE!")}>CLick aqui</button>

            {/* Renderização condicional */}
            {userIsLoggedIn ? (<div><p>Está Logado</p></div>): (<div><p>Não está logado</p></div>)}

            <p>{userRoler === "admin" && "Você é um Admin"}</p>

            {/* Renderização de listas */}
            <div>
                <ul>
                    {usuarios.map((usuarios)=>(
                        <li key={usuarios.id}>{usuarios.id} - {usuarios.nome}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};



export default JsxExamples;