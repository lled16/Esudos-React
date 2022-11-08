import Button from '../Components/eventos/Button'
function Eventos({numero}){

function meuEvento(){

       console.log('Botao Clicado !' + numero)
       console.log("Ativando primeiro evento");
   
}
function segundoEvento(){
    console.log('Ativando o segundo evento!');
}

    return(
        <div>
        <p>Clique para ativar</p>
        <button onClick={meuEvento}>Ativar</button>
        <Button event={meuEvento} text="Primeiro Evento"/>
        <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Eventos