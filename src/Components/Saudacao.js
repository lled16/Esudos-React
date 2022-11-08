function Saudacao ({nome}){


    function gerarSaudacao(algumNome){
        return 'Olá, ' + algumNome + ', Tudo bem ?'
    }

    return(
        <>
        {/* Forma de fazer um IF sem else, basta utilizar o && */}
        {nome && <p>{gerarSaudacao(nome)}</p>}
        
        </>
    )
}

export default Saudacao