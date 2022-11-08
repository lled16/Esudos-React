import { useState } from 'react'


function Condicional() {


    const [email, setEmail] = useState()

    const [userEmail, setUserEmail] = useState()


    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
       setUserEmail ('');
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" placeholder='Digite o email' onChange={(e) => setEmail(e.target.value)}></input>
        

            <button type='submit' onClick={enviarEmail}>
                Enviar Email
            </button>


           {userEmail && (
            <div>
               <p> O email do usuario é : {userEmail}</p>
               <button onClick={limparEmail}>
                Limpar email
               </button>
            </div>
           )}
            </form>
        </div>
    )
}

export default Condicional;