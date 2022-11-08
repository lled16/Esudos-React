import { useState } from 'react'

function Form (){

    function cadastrarUsuario(e){
        console.log('Usuário: ' + name + ' Senha: ' + passowrd)
        e.preventDefault();
        console.log("Cadastrou o usuário !");
    }

    const [name, setName] = useState()
    const [passowrd, setPassword] = useState()

    return(
<div>
    
    <h1>Meu cadastro</h1>
    <form  onSubmit={cadastrarUsuario}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input
            type="text" 
            id="name" 
            name="name" 
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
        <label htmlFor="passowrd">Senha:</label>
            <input 
            type="password"
            id="password" 
            name="password" 
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            />

        </div>
        <div>
        <input type="submit" value="Cadastrar"/>
        </div>
    </form>

</div>

    )
}
export default Form